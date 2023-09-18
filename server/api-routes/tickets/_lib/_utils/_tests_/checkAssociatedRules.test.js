import { checkAssociatedRules } from "../checkAssociatedRules.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";

describe("checkAssociatedRules", () => {
  it("should contain a validated condition", () => {
    const data = {
      associatedStreamData: {
        streamer: [
          {
            label: "apple",
            value: "eye",
          },
        ],
      },
      associatedStreamRules: [
        {
          id: 1,
          rule_id: 1,
          assoc_id: 1,
          stream_name: "streamer",
          condition: "apple",
          operator: "=",
          value: "eye",
        },
      ],
    };
    const newData = checkAssociatedRules(data);

    expect(newData.associatedStreamsRuleMatch).to.be.not.null;
    expect(newData.associatedStreamsRuleMatch.length).to.be.equal(1);
  });

  it("should not contain validated conditions", () => {
    const data = {
      associatedStreamData: {
        streamer: [
          {
            label: "apple",
            value: "ball",
          },
        ],
      },
      associatedStreamRules: [
        {
          id: 1,
          rule_id: 1,
          assoc_id: 1,
          stream_name: "streamer",
          condition: "apple",
          operator: "=",
          value: "eye",
        },
      ],
    };
    const newData = checkAssociatedRules(data);

    expect(newData.associatedStreamsRuleMatch).to.be.not.null;
    expect(newData.associatedStreamsRuleMatch.length).to.be.equal(0);
  });

  it("should contain 1 validated condition", () => {
    const data = {
      associatedStreamData: {
        streamer: [
          {
            label: "apple",
            value: "ball",
          },
        ],
        streaming: [
          {
            label: "sky",
            value: "blue",
          },
        ],
      },
      associatedStreamRules: [
        {
          id: 1,
          rule_id: 1,
          assoc_id: 1,
          stream_name: "streamer",
          condition: "apple",
          operator: "=",
          value: "eye",
        },
        {
          id: 2,
          rule_id: 2,
          assoc_id: 2,
          stream_name: "streaminf",
          condition: "sky",
          operator: "=",
          value: "blue",
        },
      ],
    };
    const newData = checkAssociatedRules(data);

    expect(newData.associatedStreamsRuleMatch).to.be.not.null;
    expect(newData.associatedStreamsRuleMatch.length).to.be.equal(1);
  });

  it("should contain 3 validated condition", () => {
    const data = {
      associatedStreamData: {
        streamer: [
          {
            label: "apple",
            value: 2,
          },
        ],
        streaming: [
          {
            label: "sky",
            value: 1,
          },
        ],
        grounding: [
          {
            label: "ground",
            value: 6,
          },
        ],
      },
      associatedStreamRules: [
        {
          id: 1,
          rule_id: 1,
          assoc_id: 1,
          stream_name: "streamer",
          condition: "apple",
          operator: ">=",
          value: 2,
        },
        {
          id: 2,
          rule_id: 2,
          assoc_id: 2,
          stream_name: "streaming",
          condition: "sky",
          operator: "=",
          value: 1,
        },
        {
          id: 3,
          rule_id: 3,
          assoc_id: 3,
          stream_name: "grounding",
          condition: "ground",
          operator: "<=",
          value: 7,
        },
      ],
    };
    const newData = checkAssociatedRules(data);

    expect(newData.associatedStreamsRuleMatch).to.be.not.null;
    expect(newData.associatedStreamsRuleMatch.length).to.be.equal(3);
  });

  it("should not contain validated conditions", () => {
    const data = {
      associatedStreamData: {
        streamer: [
          {
            label: "apple",
            value: 1,
          },
        ],
        streaming: [
          {
            label: "sky",
            value: 3,
          },
        ],
        grounding: [
          {
            label: "ground",
            value: 8,
          },
        ],
      },
      associatedStreamRules: [
        {
          id: 1,
          rule_id: 1,
          assoc_id: 1,
          stream_name: "streamer",
          condition: "apple",
          operator: ">=",
          value: 2,
        },
        {
          id: 2,
          rule_id: 2,
          assoc_id: 2,
          stream_name: "streaming",
          condition: "sky",
          operator: "=",
          value: 1,
        },
        {
          id: 3,
          rule_id: 3,
          assoc_id: 3,
          stream_name: "grounding",
          condition: "ground",
          operator: "<=",
          value: 7,
        },
      ],
    };
    const newData = checkAssociatedRules(data);

    expect(newData.associatedStreamsRuleMatch).to.be.not.null;
    expect(newData.associatedStreamsRuleMatch.length).to.be.equal(0);
  });
});
