import _ from "lodash";
import Congruity from "congruity";
import { updateAssociatedTickets } from "../_composed/updateAssociatedTickets.js";
import { createAssociatedTickets } from "../_composed/createAssociatedTickets.js";

const createOrUpdateExpertConnectTicket = Congruity.fn.asyncAlt(
  updateAssociatedTickets,
  createAssociatedTickets
);

export { createOrUpdateExpertConnectTicket };
