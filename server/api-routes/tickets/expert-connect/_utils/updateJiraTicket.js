import _ from "lodash";
import fetch from "node-fetch";

export async function updateJiraTicket(data = null) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
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

    if (response.status >= 400) {
      console.log("JIRA FAILED RESPONSE: ", await response.json());
      throw new Error(
        "Unable to update jira ticket: " + clonedData.jiraTicket.id
      );
    }

    clonedData.jiraTicketUpdated = {
      ...clonedData.jiraTicket.payload,
      specifications: clonedData.specifications,
    };

    return clonedData;
  } catch (e) {
    console.log(
      "EXPERT CONNECT FAILED TO UPDATE JIRA VIA WEBHOOK: ",
      e.message
    );
    console.log("EXPERT CONNECT FAILED TO UPDATE JIRA VIA WEBHOOK: ", e.stack);

    return null;
  }
}
