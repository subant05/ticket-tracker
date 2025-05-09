import _ from "lodash";

export function verifyUpdate(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    if (
      clonedData.type === "ticket.updated" ||
      clonedData.type === "ticket.note.created" ||
      clonedData.expertConnectTicket.data.description.includes("JIRA Link")
    )
      return clonedData;
    else {
      throw new Error(`Ticket is not valid
       Type: ${clonedData.type}
       Description: ${clonedData.expertConnectTicket.data.description}`);
    }
  } catch (e) {
    // console.log(e.message);
    // console.log(e.stack);
    return null;
  }
}
