import _ from "lodash";
import fetch from "node-fetch";

export async function getJiraTicket(data) {
  if (!data || data === null || !data.expertConnectTicket) return null;
  const clonedData = _.cloneDeep(data);

  try {
    const response = await fetch(
      `${process.env.JIRA_URL}/rest/api/2/issue/${clonedData.jiraTicket.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
        },
      }
    );

    const existingJiraTicket = await response.json();
    clonedData.existingJiraTicket = existingJiraTicket;

    return clonedData;
  } catch (e) {
    console.log(
      "EXPERT CONNECT TICKET UPDAT: FAILED TO GET EXISTING TICKET: ",
      e.message
    );
    console.log(
      "EXPERT CONNECT TICKET UPDAT: FAILED TO GET EXISTING TICKET: ",
      e.stack
    );

    return null;
  }
}
