import Congruity from "congruity";
import { generateRequestHeaders } from "../_utils/generateRequestHeaders.js";
import { getExpertConnectBaseApiUrl } from "../_utils/getExpertConnectBaseApiUrl.js";
import { getDataBasedOnEventType } from "../alternates/getDataBasedOnEventType.js";
import { vaidateExpertConnectTicket } from "../_utils/validateExpertConnectTicket.js";

export const getExpertConnectTicketData = Congruity.fn.asyncCompose(
  Congruity.fn.tap((data) => {
    console.log("TAP: ", data);
  }),
  vaidateExpertConnectTicket,
  getDataBasedOnEventType,
  getExpertConnectBaseApiUrl,
  generateRequestHeaders
);
