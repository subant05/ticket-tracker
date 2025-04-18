import Congruity from "congruity";
import { checkRules } from "./checkRules.js";
import { checkAssociatedRules } from "./checkAssociatedRules.js";
import { formatData } from "./formatData.js";
import { isActiveTicket } from "../_utils/isActiveTicket.js";
import { getApiEndpoints } from "../_utils/getApiEndpoints.js";

export const setupTickets = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(checkAssociatedRules),
  async (result) => result.asyncMap(checkRules),
  async (result) => result.asyncMap(isActiveTicket),
  async (result) => result.asyncMap(getApiEndpoints),
  async (result) => result.asyncMap(formatData),
  Congruity.monad.Either.fromNullable
);
