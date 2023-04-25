import _ from "lodash";
import { replaceUnderscores } from "../_utils/replaceUnderscores.js";
import { replaceSpaces } from "../_utils/replaceSpaces.js";

export async function updateJiraLabelsWithExperConnectTags(data) {
  if (
    !data ||
    data === null ||
    !data.expertConnectTicket ||
    !data.existingJiraTicket
  )
    return null;

  const clonedData = _.cloneDeep(data);

  try {
    if (!clonedData.jiraTicket)
      clonedData.jiraTicket = {
        payload: { fields: { update: { labels: [] } } },
      };

    const expertConnectTicketTags = clonedData.expertConnectTicket.data.tags;
    const expertConnectTicketTagNames = expertConnectTicketTags.map(
      (ecTag) => ecTag.name
    );
    const currentJiraLabels = clonedData.existingJiraTicket.fields.labels;

    if (expertConnectTicketTags.length) {
      const addTags = (clonedData.jiraTicket.payload.labels =
        expertConnectTicketTags
          .filter(
            (filteredTag) =>
              !currentJiraLabels.find(
                (jiraLabel) =>
                  jiraLabel === "exc_" + replaceSpaces(filteredTag.name)
              )
          )
          .map((mappedTag) => {
            return { add: `exc_${replaceSpaces(mappedTag.name)}` };
          }));

      const removeTags = currentJiraLabels
        .filter((filterRemoveTag) => {
          return /^(exc_)/gi.test(filterRemoveTag);
        })
        .filter(
          (mappedRemoveTags) =>
            expertConnectTicketTagNames.indexOf(
              replaceUnderscores(mappedRemoveTags.replace(/^(exc_)/gi, ""))
            ) === -1
        )
        .map((mappedRemoveTag) => {
          return { remove: mappedRemoveTag };
        });

      clonedData.jiraTicket.payload.update = {
        labels: [...removeTags, ...addTags],
      };
    }

    return clonedData;
  } catch (e) {
    console.log("ERROR UPDATING JIRA TICKET LABLES: ", e.message);
    console.log("ERROR UPDATING JIRA TICKET LABLES: ", e.stack);

    return null;
  }
}
