import { checkCondition } from "../checkCondition.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";

describe("checkCondition", () => {
  it("should evaluate (=) to true", () => {
    // =
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "=",
        value: "eye",
      },
      {
        label: "apple",
        value: "eye",
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (=) to false", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "=",
        value: 1,
      },
      {
        label: "apple",
        value: "eye",
      }
    );
    expect(evalation).to.be.false;
  });

  // >
  it("should evaluate (>) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: ">",
        value: 1,
      },
      {
        label: "apple",
        value: 2,
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (>) to false", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: ">",
        value: 1,
      },
      {
        label: "apple",
        value: 0,
      }
    );
    expect(evalation).to.be.false;
  });

  // <
  it("should evaluate (<) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "<",
        value: 1,
      },
      {
        label: "apple",
        value: 0,
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (<) to false", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "<",
        value: 3,
      },
      {
        label: "apple",
        value: 5,
      }
    );
    expect(evalation).to.be.false;
  });

  // >=
  it("should evaluate (>=) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: ">=",
        value: 1,
      },
      {
        label: "apple",
        value: 1,
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (>=) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: ">=",
        value: 1,
      },
      {
        label: "apple",
        value: 4,
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (>=) to false", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: ">=",
        value: 3,
      },
      {
        label: "apple",
        value: 1,
      }
    );
    expect(evalation).to.be.false;
  });

  // <=
  it("should evaluate (<=) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "<=",
        value: 1,
      },
      {
        label: "apple",
        value: 1,
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (<=) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "<=",
        value: 1,
      },
      {
        label: "apple",
        value: 0,
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (<=) to false", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "<=",
        value: 3,
      },
      {
        label: "apple",
        value: 6,
      }
    );
    expect(evalation).to.be.false;
  });

  // <=||>=
  it("should evaluate (<=||>=) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "<=||>=",
        value: "5,10",
      },
      {
        label: "apple",
        value: 1,
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (<=||>=) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "<=||>=",
        value: "5,10",
      },
      {
        label: "apple",
        value: 11,
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (<=||>=) to false", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "<=||>=",
        value: "5,10",
      },
      {
        label: "apple",
        value: 6,
      }
    );
    expect(evalation).to.be.false;
  });

  it("should evaluate (<=||>=) to false", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: "<=||>=",
        value: "5,10",
      },
      {
        label: "apple",
        value: 8,
      }
    );
    expect(evalation).to.be.false;
  });

  // >=||<=
  it("should evaluate (>=||<=) to false", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: ">=||<=",
        value: "10,5",
      },
      {
        label: "apple",
        value: 6,
      }
    );
    expect(evalation).to.be.false;
  });

  it("should evaluate (>=||<=) to false", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: ">=||<=",
        value: "10,1",
      },
      {
        label: "apple",
        value: 9,
      }
    );
    expect(evalation).to.be.false;
  });

  it("should evaluate (>=||<=) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: ">=||<=",
        value: "10,8",
      },
      {
        label: "apple",
        value: 11,
      }
    );
    expect(evalation).to.be.true;
  });

  it("should evaluate (>=||<=) to true", () => {
    const evalation = checkCondition(
      {
        condition: "apple",
        operator: ">=||<=",
        value: "10,4",
      },
      {
        label: "apple",
        value: 3,
      }
    );
    expect(evalation).to.be.true;
  });
});
