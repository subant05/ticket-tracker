import { formatAssociatedData } from "../formatAssociatedData.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";

describe("formatAssociatedData", () => {
  it("should convert original property name to custom name  and add it to data object", () => {
    const data = {
      value: {},
      associatedStreamData: {
        streamdata: [
          {
            label: "apple",
            value: "eye",
          },
        ],
      },
      associatedDataFormatting: [
        {
          key: "apple",
          value: "orange",
        },
      ],
    };

    const converted = formatAssociatedData(data);

    console.log(converted);

    expect(converted.orange).to.be.not.null;
    expect(converted.orange).to.equal("eye");
  });

  it("should not convert original property name to custom name and add it to data object", () => {
    const data = {
      value: {},
      associatedStreamData: {
        streamdata: [
          {
            label: "apple",
            value: "eye",
          },
        ],
      },
      associatedDataFormatting: [
        {
          key: "orange",
          value: "orange",
        },
      ],
    };

    const converted = formatAssociatedData(data);

    console.log(converted);

    expect(converted.orange).to.be.undefined;
  });
});
