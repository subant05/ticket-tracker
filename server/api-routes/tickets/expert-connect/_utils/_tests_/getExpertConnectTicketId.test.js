import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { getExpertConnectTicketId } from "../getExpertConnectTicketId.js";

describe("getExpertConnectTicketId", () => {
  let data = {};

  before(() => {
    data = {
      type: "ticket.updated",
      entityid: "abc123",
      data: {
        ticketId: "xyz8910",
      },
    };
  });

  it("should get ticket id entityId", () => {
    const parsedData = getExpertConnectTicketId(data);

    expect(parsedData).to.be.not.null;
    expect(parsedData.ticketId).to.equal("abc123");
  });

  it("should get ticket id entityId", () => {
    data.type = "ticket.created";
    const parsedData = getExpertConnectTicketId(data);

    expect(parsedData).to.be.not.null;
    expect(parsedData.ticketId).to.equal("abc123");
  });

  it("should get ticket id ticketId", () => {
    data.type = "ticket.note.created";
    const parsedData = getExpertConnectTicketId(data);

    expect(parsedData).to.be.not.null;
    expect(parsedData.ticketId).to.equal("xyz8910");
  });
});
