import { createFormantShareLink } from "../createFormantShareLink.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { parseRequestBody } from "../parseRequestBody.js";
import { getVehicleInformation } from "../getVehicleInformation.js";
import { req } from "./_config.js";

describe("createFormantShareLink", () => {
  let data = {};

  before(async () => {
    const parsedBody = parseRequestBody(req);
    data = await getVehicleInformation(parsedBody);
  });

  it("should create a Formant shared link", (done) => {
    createFormantShareLink(data).then(
      (data) => {
        expect(data).to.be.not.null;
        expect(data.url.length).to.be.greaterThan(1);
        done();
      },
      (err) => {
        done(new Error("Some error occured in createFormantShareLink() test"));
      }
    );
  });
});
