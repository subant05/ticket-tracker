import _ from "lodash";
import fetch from "node-fetch";

export async function createJiraTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  const response = await fetch(`${process.env.JIRA_URL}/rest/api/2/issue`, {
    method: "POST",
    body: JSON.stringify(clonedData.jiraTicket.payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
    },
  });

  const jiraResult = await response.json();

  if (response.status >= 400)
    console.log("JIRA TICKET CREATION ERROR: ", e.message);

  clonedData.jiraTicket = {
    ...clonedData.jiraTicket.payload,
    specifications: clonedData.specifications,
    jiraResponse: {
      ...jiraResult,
      url: `${process.env.JIRA_URL}/browse/${jiraResult.key}`,
    },
  };

  return clonedData;
}
