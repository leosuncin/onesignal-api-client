// tslint:disable:missing-jsdoc

import { expect } from "chai";
import * as nock from "nock";

import { sendNotification } from "api/sendNotification";
import { SERVER_URL } from "values/SERVER_URL";

describe("Send notifications", () => {
  const appId: string = "0c8383d1-68e9-4c8b-b2c5-5716454a9ab7"; // Don't copy this, is a random value
  const secret: string = "YjhmMzFlNTAtNWYxOC00YzU1LWI3NGUtM2U4Y2I5NDA3YmQw"; // Don't copy this, is a random value

  beforeEach(() => {
    nock(SERVER_URL)
      .replyContentLength()
      .post("/api/v1/notifications")
      .reply(function(
        this: nock.Scope,
        uri: string,
        body: string
      ): nock.ReplyCallbackResult {
        const { headers: { authorization } } = this["req"]; // tslint:disable-line no-invalid-this no-string-literal
        if (authorization && /^Basic\s+.+/.test(authorization)) {
          return [
            201,
            { id: "d76659a1-134e-4af5-a15f-8b7085f7dd15", recipients: 3 }
          ];
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

  it("Should send to all subscribers", async () => {
    const result: object = await sendNotification(secret, {
      app_id: appId,
      contents: {
        en:
          "Truth decrepit intentions pious good justice disgust free disgust oneself morality faithful victorious."
      },
      included_segments: ["All Users"]
    });
    expect(result).to.be.a("object");
    expect(result).has.property("id").with.a("string");
    expect(result).has.property("recipients").with.a("number");
  });

  it("Should send by segment", async () => {
    const result: object = await sendNotification(secret, {
      app_id: appId,
      contents: {
        en:
          "Christianity salvation burying marvelous grandeur god ocean sea pious spirit ultimate insofar of."
      },
      included_segments: ["Active Users"]
    });
    expect(result).to.be.a("object");
    expect(result).has.property("id").with.a("string");
    expect(result).has.property("recipients").with.a("number");
  });

  it("Should send by filter", async () => {
    const result: object = await sendNotification(secret, {
      app_id: appId,
      contents: {
        en:
          "Christianity salvation burying marvelous grandeur god ocean sea pious spirit ultimate insofar of."
      },
      filters: [
        { field: "tag", key: "level", relation: "=", value: "10" },
        { operator: "OR" },
        { field: "amount_spent", relation: ">", value: "0" }
      ]
    });
    expect(result).to.be.a("object");
    expect(result).has.property("id").with.a("string");
    expect(result).has.property("recipients").with.a("number");
  });

  it("Should send by device", async () => {
    const result: object = await sendNotification(secret, {
      app_id: appId,
      contents: {
        en:
          "Ocean self truth passion right. Free intentions inexpedient contradict dead inexpedient."
      },
      include_player_ids: [
        "6392d91a-b206-4b7b-a620-cd68e32c3a76",
        "76ece62b-bcfe-468c-8a78-839aeaa8c5fa",
        "8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86"
      ]
    });
    expect(result).to.be.a("object");
    expect(result).has.property("id").with.a("string");
    expect(result).has.property("recipients").with.a("number");
  });

  it("Should fail when REST API KEY isn't passed", (done: MochaDone) => {
    sendNotification("", {
      app_id: appId,
      contents: {
        en:
          "Eternal-return hatred ubermensch marvelous truth against law selfish faith philosophy spirit philosophy passion."
      },
      included_segments: ["All"]
    })
      .then(done)
      .catch((error: Error) => {
        expect(error).to.be.a("error");
        expect(error).has.property("message").with.a("string");
        expect(error).has.property("stack");
        done();
      });
  });
});
