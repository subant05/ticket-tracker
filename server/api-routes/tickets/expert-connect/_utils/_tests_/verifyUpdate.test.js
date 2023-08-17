import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { verifyUpdate } from "../verifyUpdate.js";

describe("verifyUpdate", () => {
  let data = {};

  before(() => {
    data.type = "ticket.updated";
    data.expertConnectTicket = {
      data: {
        description: "JIRA Link",
      },
    };
  });

  it("should be verified", () => {
    const isVerified = verifyUpdate(data);

    expect(isVerified).to.not.be.null;
  });

  it("should be verified", () => {
    data.type = "ticket.note.created";
    const isVerified = verifyUpdate(data);

    expect(isVerified).to.not.be.null;
  });

  it("should not be verified", () => {
    data.type = "ticket.modified";
    data.expertConnectTicket.data.description = "";
    const isVerified = verifyUpdate(data);

    expect(isVerified).to.be.null;
  });
});
