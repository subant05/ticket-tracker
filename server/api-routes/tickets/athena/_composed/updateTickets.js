import Congruity from "congruity";
import { updateExpertConnectTicket } from "../_utils/updateExpertConnectTicket.js";
import { updateJiraTicket } from "../_utils/updateJiraTicket.js";

export const updateTickets = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(updateJiraTicket),
  async (result) => result.asyncMap(updateExpertConnectTicket)
);
