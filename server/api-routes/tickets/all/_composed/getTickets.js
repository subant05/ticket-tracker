import Congruity from "congruity";
import { parseTicketRequestQuery } from "../_utils/parseTicketRequestQuery.js";
import { getAssociatedTickets } from "../_utils/getAssociatedTickets.js";

export const getTickets = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(getAssociatedTickets),
  async (result) => result.asyncMap(parseTicketRequestQuery)
);
