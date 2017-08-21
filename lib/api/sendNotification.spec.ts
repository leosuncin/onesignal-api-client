// tslint:disable:missing-jsdoc

import { expect } from "chai";
import * as nock from "nock";

import { SERVER_URL } from "values/SERVER_URL";

import { sendNotification } from "api/sendNotification";

describe("Send notifications", () => {
  const appId: string = "458dcec4-cf53-11e3-add2-000c2940e62c"; // Don't copy this to production, is a test value

  beforeEach(() => {
    nock(SERVER_URL).post("/api/v1/notifications").reply(201, {
      id: "458dcec4-cf53-11e3-add2-000c2940e62c",
      recipients: 3
    });
  });

  it("Should send to all subscribers", async () => {
    const result: object = await sendNotification({
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
    const result: object = await sendNotification({
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
    const result: object = await sendNotification({
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
    const result: object = await sendNotification({
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
});
