import { describe, it } from "mocha";
import { expect } from "chai";
import { addVPUPostionToMachineId } from "../addVPUPostionToMachineId.js";
import { req } from "./_config.js";

describe("addVPUPostionToMachineId", () => {
  let updatedData = {};
  let curriedFunc = (data) => data;

  before(function () {
    curriedFunc = addVPUPostionToMachineId(1);
    updatedData = curriedFunc(req);
  });

  it("should added _1 to machine_id", () => {
    expect(updatedData.body.machine_id).to.equal("83_1");
  });
});
