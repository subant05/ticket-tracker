import { verifyAssociatedStreamsValidity } from "../verifyAssociatedStreamsValidity.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";

describe("verifyAssociatedStreamsValidity", () => {
  let data = {};
  before(() => {
    data = {
      associatedStreams: [1],
      associatedStreamRules: [1],
      associatedStreamsRuleMatch: [1],
      associatedStreamRules: [1],
      associatedStreamRules: [1],
    };
  });

  it("should return true", () => {
    expect(verifyAssociatedStreamsValidity(data)).to.be.true;
  });

  it("should return true: associatedStreams = []", () => {
    data.associatedStreams = [];

    expect(verifyAssociatedStreamsValidity(data)).to.be.true;
  });

  it("should return true: associatedStreamRules = []", () => {
    data.associatedStreamRules = [];

    expect(verifyAssociatedStreamsValidity(data)).to.be.true;
  });

  it("should return false: associatedStreamRules = []", () => {
    data.associatedStreamRules = [];

    expect(verifyAssociatedStreamsValidity(data)).to.be.false;
  });

  it("should return false: associatedStreamRules = []", () => {
    data.associatedStreamRules = [];

    expect(verifyAssociatedStreamsValidity(data)).to.be.false;
  });

  it("should return false: associatedStreamsRuleMatch = []", () => {
    data.associatedStreamsRuleMatch = [];

    expect(verifyAssociatedStreamsValidity(data)).to.be.false;
  });

  it("should return false: associatedStreamsRuleMatch = []", () => {
    data.associatedStreamRules = [];

    expect(verifyAssociatedStreamsValidity(data)).to.be.false;
  });

  it("should return false: associatedStreamsRuleMatch  == associatedStreamRules", () => {
    data.associatedStreamRules = [];
    data.associatedStreamsRuleMatch = [1];

    expect(verifyAssociatedStreamsValidity(data)).to.be.false;
  });
});
