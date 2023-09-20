import _ from "lodash";

export function skipTicket(ticket) {
  return function (data) {
    if (!data || data === null) return null;
    const clonedData = _.cloneDeep(data);
    if (
      clonedData.tickets &&
      clonedData.tickets.skip instanceof Array &&
      clonedData.tickets.skip.indexOf(
        ticket.replace(/_/gi, " ").toLowerCase()
      ) > -1
    )
      return clonedData;
    else return false;
  };
}
