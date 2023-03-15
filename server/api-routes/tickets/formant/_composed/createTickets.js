import { createExpertConnectTicket } from "../_utils/createExpertConnectTicket.js";
import Congruity from "congruity";
import { createJiraTicket } from "../_utils/createJiraTicket.js";
import { insertTicketsIntoDatabase } from "../_utils/insertTicketsIntoDatabase.js";

export const createTickets = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(insertTicketsIntoDatabase),
  async (result) => result.asyncMap(createJiraTicket),
  async (result) => result.asyncMap(createExpertConnectTicket)
);
