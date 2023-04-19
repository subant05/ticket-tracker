import _ from "lodash";

export function verifyUpdate(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  if (
    clonedData.type === "ticket.updated" ||
    clonedData.type === "ticket.note.created" ||
    clonedData.expertConnectTicket.data.description.includes("JIRA Link")
  )
    return clonedData;

  return null;
}
