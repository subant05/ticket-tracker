import fetch from "node-fetch";
import { generateJiraPayload } from "./_utils/generateJiraPayload.js";
import { generateSpecifications } from "../_utlis/generateSpecifications.js";
import { generateTicketDescription } from "../../formating/generateTicketDescription.js";

export const createJiraTicket = async (data) => {
  try {
    const specifications = generateTicketDescription(data);
    const payload = generateJiraPayload({
      ...data,
      description: specifications,
    });

    const response = await fetch(`${process.env.JIRA_URL}/rest/api/2/issue`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
      },
    });

    const issue = await response.json();
    return { ...issue, ...payload, specifications };
  } catch (e) {
    console.log("JIRA TICKET CREATION ERROR: ", e.message);
    console.log("JIRA TICKET CREATION ERROR: ", e.stack);
  }
};
