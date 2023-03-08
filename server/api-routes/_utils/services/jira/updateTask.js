import fetch from "node-fetch";
import { generateJiraPayload } from "./_utils/generateJiraPayload.js";
import { generateSpecifications } from "../_utlis/generateSpecifications.js";
import { generateTicketDescription } from "../../formating/generateTicketDescription.js";

export const updateJiraTicket = async (ticketId, data) => {
  try {
    const specifications = generateTicketDescription(data);
    const payload = generateJiraPayload({
      ...data,
      description: specifications,
    });

    const response = await fetch(
      `${process.env.JIRA_URL}/rest/api/2/issue/${ticketId}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
        },
      }
    );

    if (response.status !== 200)
      throw new Error("Unable to update jira ticket: " + ticketId);

    return { ...payload, specifications };
  } catch (e) {
    console.log("JIRA TICKET UPDATE ERROR: ", e.message);
    console.log("JIRA TICKET UPDATE ERROR: ", e.stack);
  }
};
