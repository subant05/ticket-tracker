import _ from "lodash";

export function formatExpertConnectWebhookData(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  Object.entries(data).forEach((item) => {
    let value = item[1];
    if (typeof value === "object" && item[0].toLowerCase() === "data")
      value = { ticketId: value.TicketId };

    clonedData[item[0].toLowerCase()] = value;
  });

  return clonedData;
}
