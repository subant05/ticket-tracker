import _ from "lodash";

export function vaidateExpertConnectTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const expertConnectTicket = clonedData.expertConnectTicket;

  if (
    !expertConnectTicket ||
    !expertConnectTicket.data ||
    !expertConnectTicket.data.tags ||
    !expertConnectTicket.data.tags.length ||
    !expertConnectTicket.data.tags.find((tag) => tag.name === "Vision")
  ) {
    return null;
  }

  return clonedData;
}
