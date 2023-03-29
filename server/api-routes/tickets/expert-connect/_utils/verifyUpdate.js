import _ from "lodash";

export function verifyUpdate(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  if (
    clonedData.type !== "ticket.updated" ||
    !clonedData.expertConnectTicket.data.description.match(/(JIRA Link)/gi)
  )
    return null;

  return clonedData;
}
