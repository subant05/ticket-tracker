import _ from "lodash";

export function getExpertConnectTicketId(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  switch (clonedData.type) {
    case "ticket.updated":
    case "ticket.created":
      clonedData.ticketId = clonedData.entityid;
      break;
    case "ticket.note.created":
      clonedData.ticketId = clonedData.data.ticketId;
      break;
    default:
      return null;
  }

  return clonedData;
}
