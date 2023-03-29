import _ from "lodash";

export function copyDescriptionAndMisc(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  const description = clonedData.expertConnectTicket.data.description;
  const title = clonedData.expertConnectTicket.data.title;
  const misc = clonedData.expertConnectTicket.data.misc
    ? clonedData.expertConnectTicket.data.misc.toLowerCase()
    : "";

  return { ...clonedData, description, misc };
}
