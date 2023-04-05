import _ from "lodash";
import fetch from "node-fetch";

export async function createJiraTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    const response = await fetch(`${process.env.JIRA_URL}/rest/api/2/issue`, {
      method: "POST",
      body: JSON.stringify(clonedData.jiraTicket.payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
      },
    });

    const jiraResult = await response.json();

    if (response.status >= 400) {
      console.log(response);
      console.log(jiraResult);
      throw new Error("JIRA TICKET CREATION ERROR: ", response);
    }

    clonedData.jiraTicket = {
      ...clonedData.jiraTicket.payload,
      specifications: clonedData.specifications,
      jiraResponse: {
        ...jiraResult,
        url: `${process.env.JIRA_URL}/browse/${jiraResult.key}`,
      },
    };

    return clonedData;
  } catch (e) {
    console.log("ERROR CREATING JIRA TICKET: ", e.message);
    console.log("ERROR CREATING JIRA TICKET: ", e.stack);
    console.log("ERROR CREATING JIRA TICKET: ", e);

    return null;
  }
}
