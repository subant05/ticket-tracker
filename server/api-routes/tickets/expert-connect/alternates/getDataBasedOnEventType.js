import Congruity from "congruity";
import { getTicketOnCrudEvent } from "../_utils/getTicketOnCrudEvent.js";
import { getTicketOnNoteCreatedEvent } from "../_utils/getTicketOnNoteCreatedEvent.js";

export const getDataBasedOnEventType = Congruity.fn.asyncCompose(
  getTicketOnNoteCreatedEvent,
  getTicketOnCrudEvent
);
