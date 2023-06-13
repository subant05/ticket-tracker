import Congruity from "congruity";
import { getTickets as fetchTickets } from "./_composed/getTickets.js";

export const getTickets = Congruity.fn.asyncCompose(
  fetchTickets,
  Congruity.monad.Either.fromNullable
);
