import Congruity from "congruity";
import { generateRequestHeaders } from "../_utils/generateRequestHeaders.js";
import { getExpertConnectBaseApiUrl } from "../_utils/getExpertConnectBaseApiUrl.js";
import { getDataBasedOnEventType } from "../alternates/getDataBasedOnEventType.js";
import { vaidateExpertConnectTicket } from "../_utils/validateExpertConnectTicket.js";

export const getExpertConnectTicketData = Congruity.fn.asyncCompose(
  vaidateExpertConnectTicket,
  Congruity.fn.tap((data) => {
    console.log("TAP: ", data);
  }),
  getDataBasedOnEventType,
  getExpertConnectBaseApiUrl,
  generateRequestHeaders,
  (data) => {
    console.log(data);
    const ticketEvent = data.filter(
      (event) => event.Data && event.Data.TicketId
    )[0];
    if (!ticketEvent) return null;

    return {
      ...ticketEvent,
      data: { ticketId: ticketEvent.Data.TicketId },
      type: ticketEvent.Type,
      companyId: ticketEvent.CompanyId,
      entity: ticketEvent.Entity,
      id: ticketEvent.Id,
    };
  }
);
