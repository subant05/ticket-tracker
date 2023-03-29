import _ from "lodash";

export function getJiraTicketId(data) {
  if (!data || data === null || !data.specifications.jiralink) return null;

  const clonedData = _.cloneDeep(data);
  const urlPaths = clonedData.specifications.jiralink.split("/");
  const ticketId = urlPaths.pop();

  if (!/[0-9]+$/gi.test(ticketId)) return null;

  if (!clonedData.jiraTicket) clonedData.jiraTicket = {};

  clonedData.jiraTicket.id = ticketId;

  return clonedData;
}
