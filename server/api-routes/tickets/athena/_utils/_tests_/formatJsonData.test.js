import { formatJsonData } from "../formatJsonData.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { req } from "./_config.js";
import { parseRequestBody } from "../parseRequestBody.js";
import { formatLatestDatapoint } from "../formatLatestDatapoint.js";
import { getRuleFormatting } from "../getRuleFormatting.js";

describe("formatJsonData", () => {
  let jsonToFormat = {};

  before(async () => {
    jsonToFormat = await getRuleFormatting(
      formatLatestDatapoint(parseRequestBody(req))
    );
  });

  it("should add properties ERC & SUP", () => {
    const newObj = formatJsonData(jsonToFormat);
    expect(newObj.SUP).to.be.not.null;
    expect(newObj.ERC).to.be.not.null;
    expect(newObj.SUP).to.equal(0);
    expect(newObj.ERC).to.equal(0);
  });
});
