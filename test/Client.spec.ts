// tslint:disable:missing-jsdoc

import { expect } from "chai";
import * as proxyquire from "proxyquire";
import * as sinon from "sinon";

import { IOneSignalApi, IRestApi } from "Client";
import { INotificationSegments } from "interfaces/notification";
import { SERVER_URL } from "values";

describe("Make requests to OneSignal API", () => {
  const appId: string = "0c8383d1-68e9-4c8b-b2c5-5716454a9ab7"; // Don't copy this, is a random value
  const secretKey: string = "YjhmMzFlNTAtNWYxOC00YzU1LWI3NGUtM2U4Y2I5NDA3YmQw"; // Don't copy this, is a random value
  let api: { oneSignalApi: IOneSignalApi };
  let cancelNotification: sinon.SinonStub;
  let fail: sinon.SinonSpy;
  let sendNotification: sinon.SinonStub;
  let success: sinon.SinonSpy;

  beforeEach(() => {
    sendNotification = sinon.stub().resolves({
      id: "d76659a1-134e-4af5-a15f-8b7085f7dd15",
      recipients: 3
    });
    cancelNotification = sinon.stub().resolves({ success: true });
    success = sinon.spy();
    fail = sinon.spy();
    api = proxyquire
      .noCallThru()
      .noPreserveCache()
      .load("../lib/Client", {
        api: { cancelNotification, sendNotification }
      });
  });

  it("Should fail if not application identifier or REST API key isn't passed", () => {
    expect(api.oneSignalApi.bind(api, "", secretKey)).to.throw(
      TypeError,
      /application/
    );
    expect(api.oneSignalApi.bind(api, appId, "")).to.throw(TypeError, /secret/);
    expect(api.oneSignalApi.bind(api, null, null)).to.throw(TypeError);
    expect(api.oneSignalApi).to.throw(TypeError);
  });

  it("Should send a create notification request", () => {
    const client: IRestApi = api.oneSignalApi(appId, secretKey);
    const notification: INotificationSegments = {
      contents: {
        en:
          "Truth decrepit intentions pious good justice disgust free disgust oneself morality faithful victorious."
      },
      included_segments: ["All Users"]
    };

    client
      .sendNotification(notification)
      .then(success)
      .catch(fail);

    expect(
      sendNotification.calledWith(secretKey, { ...notification, app_id: appId })
    ).to.be.equal(
      true,
      `Expected to be called with ${secretKey} and ${notification}`
    );
    expect(sendNotification.called).to.be.equal(
      true,
      "Expected to execute sendNotification"
    );
    expect(sendNotification.calledBefore(success)).to.be.equal(
      true,
      "Expected to execute sendNotification before of resolve the promise"
    );
    expect(sendNotification.calledBefore(fail)).to.be.equal(
      true,
      "Expected to execute sendNotification before of reject the promise"
    );
  });

  it("Should cancel a notification", () => {
    const notificationId: string = "69cbefdb-b8b1-41c3-badf-03e3f6e3b386";
    const client: IRestApi = api.oneSignalApi(appId, secretKey);

    client
      .cancelNotification(notificationId)
      .then(success)
      .catch(fail);

    expect(
      cancelNotification.calledWith(secretKey, appId, notificationId)
    ).to.be.equal(
      true,
      `Expected to be called with ${secretKey}, ${appId} and ${notificationId}`
    );
    expect(cancelNotification.called).to.be.equal(
      true,
      "Expected to execute cancelNotification"
    );
    expect(cancelNotification.calledBefore(success)).to.be.equal(
      true,
      "Expected to execute cancelNotification before of resolve the promise"
    );
    expect(cancelNotification.calledBefore(fail)).to.be.equal(
      true,
      "Expected to execute cancelNotification before of reject the promise"
    );
  });
});
