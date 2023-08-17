import Congruity from "congruity";
import { sendEmail } from "../_utils/send-email.js";

export const createTicket = Congruity.fn.asyncCompose(sendEmail);
