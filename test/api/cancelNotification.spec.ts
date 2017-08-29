// tslint:disable:missing-jsdoc

import { expect } from "chai";
import * as nock from "nock";

import { cancelNotification } from "api/cancelNotification";
import { SERVER_URL } from "values/SERVER_URL";

describe("Cancel a scheduled or currently outgoing notification", () => {
  const appId: string = "0c8383d1-68e9-4c8b-b2c5-5716454a9ab7"; // Don't copy this, is a random value
  const secret: string = "YjhmMzFlNTAtNWYxOC00YzU1LWI3NGUtM2U4Y2I5NDA3YmQw"; // Don't copy this, is a random value
  const notificationId: string = "9922464b-23ff-4ac1-bb1b-f3cf465a6fb7"; // Don't copy this, is a random value

  beforeEach(() => {
    nock(SERVER_URL)
      .replyContentLength()
      .delete(`/api/v1/notifications/${notificationId}`)
      .query(true)
      .reply(function(
        this: nock.Scope,
        uri: string,
        body: string
      ): nock.ReplyCallbackResult {
        const { headers: { authorization } } = this["req"]; // tslint:disable-line no-invalid-this no-string-literal
        if (authorization && /^Basic\s+.+/.test(authorization)) {
          return [200, { success: true }];
        } else {
          return [
            400,
            {
              errors: [
                "Please include a case-sensitive header of Authorization: Basic <YOUR-REST-API-KEY-HERE> with a valid REST API key."
              ],
              reference: [
                "https://documentation.onesignal.com/docs/accounts-and-keys#section-keys-ids"
              ]
            }
          ];
        }
      });
  });

  it("Should delete a scheduled or currently outgoing notification", async () => {
    const result: object = await cancelNotification(
      secret,
      appId,
      notificationId
    );
    expect(result).to.be.a("object");
    expect(result).has
      .property("success")
      .with.a("boolean")
      .and.to.be.equal(true, "Expected to `success` was true");
  });

  it("Should fail when REST API KEY isn't passed", (done: MochaDone) => {
    cancelNotification("", "", notificationId)
      .then(done)
      .catch((error: Error) => {
        expect(error).to.be.a("error");
        expect(error).has.property("message").with.a("string");
        expect(error).has.property("stack");
        done();
      });
  });
});
