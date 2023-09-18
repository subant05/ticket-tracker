import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { getVehicleInformation } from "../getVehicleInformation.js";
import { parseRequestBody } from "../parseRequestBody.js";
import { req } from "./_config.js";

describe("getVehicleInformation", () => {
  let parsedBody = {};

  before(() => {
    parsedBody = parseRequestBody(req);
  });

  it("should get vehicle device information from database", (done) => {
    getVehicleInformation(parsedBody).then(
      (data) => {
        expect(data.device.name).to.equal(parsedBody.deviceName);
        done();
      },
      (err) => {
        done(new Error("Some error occured in getVehicleInformation() test"));
      }
    );
  });
});
