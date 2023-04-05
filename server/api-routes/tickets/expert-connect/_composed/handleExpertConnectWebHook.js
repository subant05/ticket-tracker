import { getExpertConnectTicketData } from "./getExpertConnectTicketData";
import { createOrUpdateExpertConnectTicket } from "../alternates/createOrUpdateExpertConnectTicket";
import Congruity from "congruity";

export const handleExpertConnectWebhook = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(createOrUpdateExpertConnectTicket),
  async (result) => result.asyncMap(getExpertConnectTicketData),
  Congruity.monad.Either.fromNullable
);
