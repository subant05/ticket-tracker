import { parseDeliminatedData } from "../parseDeliminatedData.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";

describe("parseDeliminatedData", () => {
  let data = { description: "" };

  before(() => {
    data.description = `
      @@Numbers
      One=1,
      Two=2,
      Three=3
      @@End
    `;
  });

  it("should return an object with three properties", () => {
    const parser = parseDeliminatedData("@@Numbers");
    const parsed = parser(data);

    expect(parsed.Numbers).to.not.be.null;
    expect(Object.keys(parsed.Numbers).length).to.equal(3);
  });
});
