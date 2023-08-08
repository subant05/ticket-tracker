import { getRuleFormatting } from "../getRuleFormatting.js";
import { getRules } from "../getRules.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { req } from "./_config.js";
import { parseRequestBody } from "../parseRequestBody.js";

describe("getRuleFormatting", () => {
  let rules = {};
  before(async () => {
    const parsedData = parseRequestBody(req);
    rules = await getRules(parsedData);
  });

  it(`should return rules for `, (done) => {
    getRuleFormatting(rules).then(
      (data) => {
        expect(data.dataFormatting).to.be.not.null;
        expect(data.dataFormatting.rows).to.be.not.null;
        done();
      },
      () => {
        done(new Error("Some error occured in getRules() test"));
      }
    );
  });
});
