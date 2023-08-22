import Congruity from "congruity";
import { sendEmail } from "../_utils/send-email.js";
import { saveTicket } from "../_utils/saveTicket.js";

export const createTicket = Congruity.fn.asyncCompose(sendEmail, saveTicket);
