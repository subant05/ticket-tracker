import Congruity from "congruity";
import { generateRequestHeaders } from "../_utils/generateRequestHeaders.js";
import { getExpertConnectBaseApiUrl } from "../_utils/getExpertConnectBaseApiUrl.js";
import { getDataBasedOnEventType } from "../alternates/getDataBasedOnEventType.js";
import { vaidateExpertConnectTicket } from "../_utils/validateExpertConnectTicket.js";
import { formatExpertConnectWebhookData } from "../_utils/formatExpertConnectWebhookData.js";

export const getExpertConnectTicketData = Congruity.fn.asyncCompose(
  vaidateExpertConnectTicket,
  getDataBasedOnEventType,
  getExpertConnectBaseApiUrl,
  generateRequestHeaders,
  formatExpertConnectWebhookData
);
