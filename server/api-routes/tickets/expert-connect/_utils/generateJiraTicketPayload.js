import _ from "lodash";

export function generateJiraTicketPayload(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (!clonedData.jiraTicket) clonedData.jiraTicket = {};

  try {
    const { bundle = 0, ERC = 0, SUP = 0 } = clonedData.specifications;

    if (
      (typeof bundle === "undefined",
      typeof ERC === "undefined",
      typeof SUP === "undefined")
    )
      throw new Error("Missing bundle, ERC &/OR SUP information");
    switch (clonedData.type) {
      case "ticket.created":
      case "ticket.updated":
        clonedData.jiraTicket.payload = {
          fields: {
            project: { key: "SQUASH" },
            summary: clonedData.expertConnectTicket.data.title,
            description: clonedData.description,
            customfield_12488: clonedData.specifications["Machine ID"]
              ? clonedData.specifications["Machine ID"]
              : "No Machine ID", // Machine
            customfield_12486: parseInt(ERC), // ERC
            customfield_12487: parseInt(SUP), // SUP
            customfield_12429: { value: "Defect" }, // "Group/Category"
            customfield_12452: [{ value: "INTERVENTIONS" }], // Spring 2023 Requirement (Airtable)
            customfield_12470: bundle
              ? parseInt(bundle)
              : parseInt(clonedData.bundle)
              ? parseInt(clonedData.bundle)
              : 0, // Bundle Numbner
            customfield_12289: [{ value: "Loamy (Autonomous Tractor)" }], // "Machine Type"
            priority: { name: "Medium" },
            customfield_12428: { value: "Spring 2023-Delivery" }, //Roadmap Item
            customfield_12300: [{ value: "Robotics" }], // Teams Responsible
            customfield_12471: clonedData.specifications["Formant Link "], //Formant Link
            customfield_12472: clonedData.specifications["ExpertConnect Link"], // ExpertConnect Link,
            customfield_12288: { value: "Field Support / ExpertConnect" }, // Bug Source
            issuetype: { name: "Bug/Story" },
          },
          reporter: {
            self: "http://jira.atlassian.com/rest/api/2/user?username=expertconnect.jira",
            name: "expertconnect.jira",
            emailAddress: "admexpertconnect.jirain@bluerivertech.com",
            displayName: "Expertconnect Jira",
            active: true,
          },
        };
        break;
      case "ticket.note.created":
        clonedData.jiraTicket.payload = {
          update: {
            comment: [
              {
                add: {
                  body: ` 
  EXPERT CONNECT NOTE
  -------------------
  
  ${clonedData.expertConnectTicketNote.data.text}
  
  -------------------
  ${clonedData.expertConnectTicketNote.data.createdDate}
  ${clonedData.expertConnectTicketNote.data.owner.firstName} ${clonedData.expertConnectTicketNote.data.owner.lastName}
  ${clonedData.expertConnectTicketNote.data.owner.email} 
  ${clonedData.expertConnectTicketNote.data.owner.phone} 
                      `,
                },
              },
            ],
          },
        };
        break;
      default:
        return null;
    }

    return clonedData;
  } catch (e) {
    console.log(e.message);
    console.log(e.stack);

    return null;
  }
}
