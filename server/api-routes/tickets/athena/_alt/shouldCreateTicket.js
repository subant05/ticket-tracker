import Congruity from "congruity";
import { shouldCreateTicket as isValidTicket } from "../_utils/shouldCreateTicket.js";
import { shouldDeactivateTicket as isInvalidTicket } from "../_utils/shouldDeactivateTicket.js";

export const shouldCreateTicket = async (result) =>
  result.asyncMap(Congruity.fn.asyncAlt(isValidTicket, isInvalidTicket));
