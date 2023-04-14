import Congruity from "congruity";
import { getTicketOnCrudEvent } from "../_utils/getTicketOnCrudEvent.js";
import { getTicketOnNoteCreatedEvent } from "../_utils/getTicketOnNoteCreatedEvent.js";
import { getExpertConnectTicketId } from "../_utils/getExpertConnectTicketId.js";

export const getDataBasedOnEventType = Congruity.fn.asyncCompose(
  getTicketOnNoteCreatedEvent,
  getTicketOnCrudEvent,
  getExpertConnectTicketId
);
