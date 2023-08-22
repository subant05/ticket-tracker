import Congruity from "congruity";
import { parseTicketRequestQuery } from "../_utils/parseTicketRequestQuery.js";
import { getTickets as fetchTickets } from "../_utils/getTickets.js";

export const getTickets = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(fetchTickets),
  async (result) => result.asyncMap(parseTicketRequestQuery)
);
