import _ from "lodash";
import fetch from "node-fetch";
import { generateTicketDescription } from "../../../_utils/formating/generateTicketDescription.js";
import { generateJiraPayload } from "../../../_utils/services/jira/_utils/generateJiraPayload.js";

export async function createJiraTicket(data) {
  if (!data || data === null) return null;

  try {
    const clonedData = _.cloneDeep(data);
    const jiraEndpoint =
      clonedData.apiEndpoints && clonedData.apiEndpoints.JIRA_URL
        ? clonedData.apiEndpoints.JIRA_URL
        : process.env.JIRA_URL;
    const specifications = generateTicketDescription(clonedData);
    const payload = generateJiraPayload({
      ...clonedData,
      description: specifications,
    });

    const response = await fetch(`${jiraEndpoint}/rest/api/2/issue`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
        "X-Atlassian-Token": "no-check",
      },
      redirect: "follow",
    });

    const issue = await response.json();

    if (issue.errors) return null;

    clonedData.jiraUrl = `${jiraEndpoint}/browse/${issue.key}`;
    clonedData.jiraTicket = {
      ...issue,
      ...payload,
      specifications,
      project: "SQUASH",
      category: "Defect",
      requirement: "INTERVENTIONS",
      machine_type: "Loamy (Autonomous Tractor)",
      priority: "Medium",
      roadmap_item: "Spring 2023-Delivery",
      team: "Robotics",
      issue_type: "Bug/Story",
      bug_source: "Field Support / ExpertConnect",
    };

    return clonedData;
  } catch (e) {
    console.log("JIRA TICKET CREATION ERROR: ", e.message);
    console.log("JIRA TICKET CREATION ERROR: ", e.stack);
    return null;
  }
}
