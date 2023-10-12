import { describe, it } from "mocha";
import { expect } from "chai";
import { parseRequestBody } from "../parseRequestBody.js";
import { req } from "./_config.js";

describe("parseRequestBody", () => {
  let parsedBody = {};
  const message =
    process.env.NODE_ENV === "development"
      ? "#### IGNORE THIS DEMOTION ####"
      : "Demotion";

  before(function () {
    parsedBody = parseRequestBody(req);
  });

  it("Ensure properties are set correctly", () => {
    expect(parseRequestBody(req).type).to.equal("alert");
    expect(parseRequestBody(req).eventType).to.equal("alert");
    expect(parseRequestBody(req).formantUrl).to.be.null;
    expect(parseRequestBody(req).url).to.equal(
      `${process.env.FORMANT_API_URL}`
    );
    expect(parseRequestBody(req).sourceUrl).to.equal(
      `${process.env.FORMANT_API_URL}`
    );
    expect(parseRequestBody(req).time).to.equal(
      req.body.timestamp.replace("T", " ")
    );
    expect(parseRequestBody(req).severity).to.equal("info");
    expect(parseRequestBody(req).streamName).to.equal(
      "autonomy_state_transition_report"
    );
    expect(parseRequestBody(req).streamType).to.equal("numeric set");
    expect(parseRequestBody(req).stream_name).to.equal(
      "autonomy_state_transition_report"
    );
    expect(parseRequestBody(req).stream_type).to.equal("numeric set");
    expect(parseRequestBody(req).deviceName).to.equal(
      `${req.body.system}_${req.body.machine_id}`
    );
    expect(parseRequestBody(req).device_name).to.equal(
      `${req.body.system}_${req.body.machine_id}`
    );
    expect(parseRequestBody(req).name).to.equal(
      `${req.body.system}_${req.body.machine_id}`
    );
    expect(JSON.stringify(parseRequestBody(req).value)).to.equal(
      JSON.stringify(req.body)
    );
    expect(parseRequestBody(req).message).to.equal(message);
    expect(JSON.stringify(parseRequestBody(req).latestDatapoint)).to.equal(
      JSON.stringify(req.body)
    );
    expect(JSON.stringify(parseRequestBody(req).valueJson)).to.equal(
      JSON.stringify([
        message,
        `${req.body.system}_${req.body.machine_id}`,
        req.body,
      ])
    );
    expect(JSON.stringify(parseRequestBody(req).messageJson)).to.equal(
      JSON.stringify([
        message,
        `${req.body.system}_${req.body.machine_id}`,
        req.body,
      ])
    );
    expect(JSON.stringify(parseRequestBody(req).tags)).to.equal(
      JSON.stringify({
        SYSTEM: req.body.system,
        VPU_POSITION: "1",
      })
    );
  });
});
