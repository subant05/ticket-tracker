import _ from "lodash";
import { replaceSpaces } from "../_utils/replaceSpaces.js";

export function addExpertConnectTagsToJira(data) {
  if (!data || data === null || data.expertConnectTicket) return null;
  const clonedData = _.cloneDeep(data);

  if (!clonedData.jiraTicket)
    clonedData.jiraTicket = { payload: { fields: { update: { labels: [] } } } };

  const expertConnectTicketTags = clonedData.expertConnectTicket.data.tags;

  if (expertConnectTicketTags.length)
    clonedData.jiraTicket.payload.update = {
      labels: expertConnectTicketTags.map((tag) => {
        return { add: `exc_${replaceSpaces(tag.name)}` };
      }),
    };

  return clonedData;
}
