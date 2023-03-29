import _ from "lodash";
import fetch from "node-fetch";

export async function updateJiraTicket(data = null) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  const response = await fetch(
    `${process.env.JIRA_URL}/rest/api/2/issue/${clonedData.jiraTicket.id}`,
    {
      method: "PUT",
      body: JSON.stringify(clonedData.jiraTicket.payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
      },
    }
  );

  if (response.status >= 400)
    throw new Error("Unable to update jira ticket: " + ticketId);

  clonedData.jiraTicketUpdated = {
    ...clonedData.jiraTicket.payload,
    specifications: clonedData.specifications,
  };

  return clonedData;
}
