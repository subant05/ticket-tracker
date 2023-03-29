import _ from "lodash";
import fetch from "node-fetch";

export async function getTicketOnNoteCreatedEvent(data) {
  if (!data || data === null) return null;

  if (["ticket.note.created"].indexOf(data.type) === -1) return null;

  const clonedData = _.cloneDeep(data);
  const response = await fetch(
    `${clonedData.request.baseUrl}/tickets/${clonedData.ticketId}/notes?Paging.Page=1&Paging.Size=100`,
    {
      headers: clonedData.request.headers,
    }
  );

  const ecData = await response.json();
  clonedData.expertConnectTicket = ecData.pop();

  return clonedData;
}
