import { describe, it } from "mocha";
import { expect } from "chai";
import { formatLatestDatapoint } from "../formatLatestDatapoint.js";

describe("formatLatestDatapoint", () => {
  let dataPoint = [];

  before(() => {
    const data = { latestDatapoint: { a: "1" } };
    const converted = [{ label: "a", value: "1" }];
    dataPoint = formatLatestDatapoint(data).latestDatapoint;
  });

  it("should convert 'latestDatapoint' to array with length of 1 ", () => {
    expect(dataPoint.length).to.equal(1);
  });
  it("should have object with a label property that equals 'a'", () => {
    expect(dataPoint[0].label).to.equal("a");
  });
  it("should have object with a value property that equals 'a'", () => {
    expect(dataPoint[0].value).to.equal("1");
  });
});
