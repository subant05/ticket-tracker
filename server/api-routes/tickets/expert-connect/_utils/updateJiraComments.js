import _ from "lodash";
import fetch from "node-fetch";

export async function updateJiraComments(data = null) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    if (!clonedData.expertConnectTicketNote) return clonedData;

    const response = await fetch(
      `${process.env.JIRA_URL}/rest/api/2/issue/${clonedData.jiraTicket.id}/comments`,
      {
        method: "PUT",
        body: { body: clonedData.expertConnectTicketNote.data.text },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
        },
      }
    );

    if (response.status >= 400)
      throw new Error(
        "Unable to update jira ticket comments: " + (await response.text())
      );

    clonedData.jiraTicketUpdated = {
      ...clonedData.jiraTicket.payload,
      specifications: clonedData.specifications,
    };

    return clonedData;
  } catch (e) {
    console.log(
      "ERROR ADDING COMMENT TO JIRA TICKET: ",
      clonedData.jiraTicket.id,
      ": ",
      e.message
    );
    console.log(
      "ERROR ADDING COMMENT TO JIRA TICKET: ",
      clonedData.jiraTicket.id,
      ": ",
      e.stack
    );
    return null;
  }
}
