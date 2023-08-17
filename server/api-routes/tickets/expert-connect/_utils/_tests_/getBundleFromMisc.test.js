import { getBundleFromMisc } from "../getBundleFromMisc.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";

describe("getBundleFromMisc", () => {
  it("should return build number of '1234' from misc field", () => {
    const parsed = getBundleFromMisc({
      misc: "bundle=1234",
    });
    expect(parsed.bundle).to.not.be.undefined;
    expect(parsed.bundle).to.not.be.null;
    expect(parsed.bundle[0]).to.equal("1234");
  });

  it("should return build number of 0 from misc field", () => {
    const parsed = getBundleFromMisc({
      misc: "bundle",
    });
    expect(parsed.bundle).to.not.be.undefined;
    expect(parsed.bundle).to.not.be.null;
    expect(parsed.bundle).to.equal(0);
  });

  it("should not return a build number", () => {
    const parsed = getBundleFromMisc({});
    expect(parsed.bundle).to.be.undefined;
  });
});
