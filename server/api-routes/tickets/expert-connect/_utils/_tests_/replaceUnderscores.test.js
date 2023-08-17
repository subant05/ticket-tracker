import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { replaceSpaces } from "../replaceSpaces.js";

describe("replaceSpaces", () => {
  it("should replace underscores", () => {
    const text = "Apple Of My Eye";
    const newText = replaceSpaces(text);

    expect(newText).to.equal("Apple_Of_My_Eye");
  });
});
