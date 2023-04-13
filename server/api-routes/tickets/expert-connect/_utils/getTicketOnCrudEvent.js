import _ from "lodash";
import fetch from "node-fetch";

export async function getTicketOnCrudEvent(data) {
  if (!data || data === null || !data.data || !data.data.ticketId) return null;

  const clonedData = _.cloneDeep(data);

  switch (clonedData.type) {
    case "ticket.updated":
    case "ticket.created":
    case "ticket.note.created":
      const response = await fetch(
        `${clonedData.request.baseUrl}/tickets/${clonedData.data.ticketId}`,
        {
          headers: clonedData.request.headers,
        }
      );
      const returnData = await response.json();
      clonedData.expertConnectTicket = returnData;

      return clonedData;
    default:
      return null;
  }

  return null;
}
