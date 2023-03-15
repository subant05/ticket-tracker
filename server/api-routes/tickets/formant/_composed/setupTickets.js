import Congruity from "congruity";
import { generateFormantRequestSpecifications } from "./generateFormantRequestSpecification.js";
import { checkRules } from "./checkRules.js";
import { checkAssociatedRules } from "./checkAssociatedRules.js";
import { isActiveTicket } from "../_utils/isActiveTicket.js";

export const setupTickets = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(checkAssociatedRules),
  async (result) => result.asyncMap(checkRules),
  async (result) => result.asyncMap(isActiveTicket),
  async (result) => result.asyncMap(generateFormantRequestSpecifications),
  Congruity.monad.Either.fromNullable
);
