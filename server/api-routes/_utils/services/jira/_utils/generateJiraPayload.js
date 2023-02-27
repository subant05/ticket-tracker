export const generateJiraPayload = (data) => {
  let payload = {};
  const {
    title = "State Demotion - ERC, SUP",
    type,
    id,
    message,
    severity,
    stream_name,
    stream_type,
    tags,
    value,
    time,
    url,
    formantUrl,
    device_id,
    bundle,
    product = "Formant",
    ERC,
    SUP,
    device_name,
    expertConnectUrl = "",
    description = "",
    jiraTicket = {},
    device,
    name,
  } = data;

  try {
    payload = {
      fields: {
        project: { key: "SQUASH" },
        summary: title,
        description: description,
        customfield_12488: device.name, // Machine
        customfield_12486: parseInt(ERC), // ERC
        customfield_12487: parseInt(SUP), // SUP
        customfield_12429: { value: "Defect" }, // "Group/Category"
        customfield_12452: [{ value: "INTERVENTIONS" }], // Spring 2023 Requirement (Airtable)
        customfield_12470: parseInt(bundle) || 0, // Bundle Numbner
        customfield_12289: [{ value: "Loamy (Autonomous Tractor)" }], // "Machine Type"
        priority: { name: "Medium" },
        customfield_12428: { value: "Spring 2023-Delivery" }, //Roadmap Item
        customfield_12300: [{ value: "Robotics" }], // Teams Responsible
        customfield_12471: formantUrl, //Formant Link
        customfield_12472: expertConnectUrl, // ExpertConnect Link,
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
  } catch (e) {
  } finally {
    return payload;
  }
};
