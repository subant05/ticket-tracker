import _ from "lodash";
import fetch from "node-fetch";

export async function getTicketOnNoteCreatedEvent(data) {
  if (
    !data ||
    data === null ||
    ["ticket.note.created"].indexOf(data.type) === -1
  )
    return data;

  try {
    const clonedData = _.cloneDeep(data);
    const notesResponse = await fetch(
      `${clonedData.request.baseUrl}/tickets/${clonedData.data.ticketId}/notes?Paging.Page=1&Paging.Size=100`,
      {
        headers: clonedData.request.headers,
      }
    );

    if (notesResponse.status != 200) throw new Error("Request Failue");

    const ecNotes = await notesResponse.json();

    clonedData.expertConnectTicketNote = ecNotes.items.reverse().pop();

    return clonedData;
  } catch (e) {
    console.log(
      "ERROR FAILED TO GET TICKETS ON NOTE CHANGES IN EXPERT CONNECT: ",
      e.message
    );
    console.log(
      "ERROR FAILED TO GET TICKETS ON NOTE CHANGES IN EXPERT CONNECT: ",
      e.stack
    );
    return null;
  }
}
