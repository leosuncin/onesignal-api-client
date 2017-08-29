// tslint:disable:missing-jsdoc

import { expect } from "chai";
import * as proxyquire from "proxyquire";
import * as sinon from "sinon";

import { IOneSignalApi, IRestApi } from "Client";
import { SERVER_URL } from "values";

describe("Make requests to OneSignal API", () => {
  const appId: string = "0c8383d1-68e9-4c8b-b2c5-5716454a9ab7"; // Don't copy this, is a random value
  const secretKey: string = "YjhmMzFlNTAtNWYxOC00YzU1LWI3NGUtM2U4Y2I5NDA3YmQw"; // Don't copy this, is a random value
  let api: { oneSignalApi: IOneSignalApi };
  let fail: sinon.SinonSpy;
  let sendNotification: sinon.SinonStub;
  let success: sinon.SinonSpy;

  beforeEach(() => {
    sendNotification = sinon.stub().resolves({
      id: "d76659a1-134e-4af5-a15f-8b7085f7dd15",
      recipients: 3
    });
    success = sinon.spy();
    fail = sinon.spy();
    api = proxyquire.noCallThru().noPreserveCache().load("./Client", {
      "api/sendNotification": { sendNotification }
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
    client
      .sendNotification({
        contents: {
          en:
            "Truth decrepit intentions pious good justice disgust free disgust oneself morality faithful victorious."
        },
        included_segments: ["All Users"]
      })
      .then(success)
      .catch(fail);

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
});
