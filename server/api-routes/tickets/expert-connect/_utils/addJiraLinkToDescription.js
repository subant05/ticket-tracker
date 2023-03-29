import _ from "lodash";

export function addJiraLinkToDescription(data) {
  try {
    if (!data || data === null) return null;

    const clonedData = _.cloneDeep(data);

    const newDescription = clonedData.description.replace(
      /(@@Specifications)[a-zA-Z0-9\n\s=,]+(@@END)/gi,
      `@@Specifications
          ${Object.entries(clonedData.specifications)
            .map((entry) => {
              return `${entry[0]} = ${entry[1]} `;
            })
            .join(",")},
            JIRA Link = ${clonedData.jiraTicket.jiraResponse.url},
        @@END`
    );

    clonedData.description = newDescription;
    clonedData.expertConnectTicket.data.description = newDescription;

    return clonedData;
  } catch (e) {
    console.log("ERROR ADDING JIRA LINK TO DESCRIPTION: ", e.message);
    console.log("ERROR ADDING JIRA LINK TO DESCRIPTION: ", e.stack);
    return null;
  }
}
