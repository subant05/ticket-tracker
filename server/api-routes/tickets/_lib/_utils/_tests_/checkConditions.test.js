import { checkConditions } from "../checkConditions.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";

describe("checkConditions", () => {
  let data = {};

  before(async () => {
    data = {
      latestDatapoint: [
        {
          label: "apple",
          value: "eye",
        },
      ],
      rules: {
        rows: [
          {
            condition: "apple",
            operator: "=",
            value: "eye",
          },
        ],
      },
    };
  });

  it("should contain validated conditions", () => {
    const newData = checkConditions(data);

    expect(newData.validatedConditions).to.be.not.null;
    expect(newData.validatedConditions.length).to.be.equal(1);
  });

  it("should not contain validated conditions", () => {
    data.latestDatapoint[0].value = 1;
    const newData = checkConditions(data);

    expect(newData.validatedConditions).to.be.not.null;
    expect(newData.validatedConditions.length).to.be.equal(0);
  });
});
