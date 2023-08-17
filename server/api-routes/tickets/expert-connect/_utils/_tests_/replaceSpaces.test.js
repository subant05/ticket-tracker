import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { replaceUnderscores } from "../replaceUnderscores.js";

describe("replaceUnderscores", () => {
  it("should replace underscores", () => {
    const text = "Apple_Of_My_Eye";
    const newText = replaceUnderscores(text);

    expect(newText).to.equal("Apple Of My Eye");
  });
});
