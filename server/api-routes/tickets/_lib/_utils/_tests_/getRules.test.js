import { getRules } from "../getRules.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { req } from "./_config.js";
import { parseRequestBody } from "../parseRequestBody.js";

describe("getRules", () => {
  it(`should return rules for `, (done) => {
    const parsedData = parseRequestBody(req);
    getRules(parsedData).then(
      (data) => {
        expect(data).to.be.not.null;
        expect(data.rules).to.be.not.null;
        expect(data.rules.rows).to.be.not.null;
        expect(data.rules.rows.length).to.be.greaterThanOrEqual(1);
        expect(parseInt(data.rule_id)).to.be.greaterThanOrEqual(1);
        done();
      },
      () => {
        done(new Error("Some error occured in getRules() test"));
      }
    );
  });
});
