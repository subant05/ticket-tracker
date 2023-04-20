import Congruity from "congruity";
import { generateRequestHeaders } from "../_utils/generateRequestHeaders.js";
import { getExpertConnectBaseApiUrl } from "../_utils/getExpertConnectBaseApiUrl.js";
import { getDataBasedOnEventType } from "../alternates/getDataBasedOnEventType.js";
import { vaidateExpertConnectTicket } from "../_utils/validateExpertConnectTicket.js";
import { formatExpertConnectWebhookData } from "../_utils/formatExpertConnectWebhookData.js";

export const getExpertConnectTicketData = Congruity.fn.asyncCompose(
  Congruity.fn.tap((data) =>
    console.log("EXPERT CONNECT TICKET VALID: ", data !== null)
  ),
  vaidateExpertConnectTicket,
  Congruity.fn.tap((data) =>
    console.log("EXPERT CONNECT TICKET: ", data.expertConnectTicket)
  ),
  getDataBasedOnEventType,
  getExpertConnectBaseApiUrl,
  generateRequestHeaders,
  Congruity.fn.tap((data) =>
    console.log("EXPERT CONNECT TICKET REQUEST: ", data)
  ),
  formatExpertConnectWebhookData
);
