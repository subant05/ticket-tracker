import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { parseSpecifications } from "../parseSpecifications.js";

describe("parseSpecifications", () => {
  let data = { description: "" };

  before(() => {
    data.description = `
      @@Specifications
      One=1,
      Two=2,
      Three=3
      @@End
    `;
  });

  it("should parse description property of object for specifications", () => {
    const parsed = parseSpecifications()(data);

    expect(parsed.specifications).to.not.be.null;
    expect(Object.keys(parsed.specifications).length).to.equal(3);
  });
});
