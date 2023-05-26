import _ from "lodash";
import fetch from "node-fetch";
import { generateTicketDescription } from "../../../_utils/formating/generateTicketDescription.js";
import { generateJiraPayload } from "../../../_utils/services/jira/_utils/generateJiraPayload.js";

export async function updateJiraTicket(data = null) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const ticketId = clonedData.jiraTicket.key;

  try {
    const specifications = generateTicketDescription(clonedData);
    const payload = generateJiraPayload({
      ...clonedData,
      description: specifications,
    });

    const response = await fetch(
      `${clonedData.apiEndpoints.JIRA_URL}/rest/api/2/issue/${ticketId}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
        },
      }
    );

    if (response.status >= 400)
      throw new Error("Unable to update jira ticket: " + ticketId);

    clonedData.jiraTicketUpdated = { ...payload, specifications };

    return clonedData;
  } catch (e) {
    console.log("JIRA TICKET UPDATE ERROR: ", e.message);
    console.log("JIRA TICKET UPDATE ERROR: ", e.stack);
    return null;
  }
}
