import _ from "lodash";

export function getJiraTicketId(data) {
  if (!data || data === null || !data.specifications.jiralink) return null;

  try {
    const clonedData = _.cloneDeep(data);
    const urlPaths = clonedData.specifications.jiralink.split("/");
    const ticketId = urlPaths.pop();

    if (!/[0-9]+$/gi.test(ticketId)) return null;

    if (!clonedData.jiraTicket) clonedData.jiraTicket = {};

    clonedData.jiraTicket.id = ticketId;

    console.log(clonedData);

    return clonedData;
  } catch (e) {
    console.log(
      "ERROR NO JIRA TICKET ASSOCIATED WITH EXPERT CONNECT TICKET: ",
      e.message
    );
    console.log(
      "ERROR NO JIRA TICKET ASSOCIATED WITH EXPERT CONNECT TICKET: ",
      e.stack
    );
    return null;
  }
}
