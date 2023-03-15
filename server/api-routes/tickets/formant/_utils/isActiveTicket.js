import { Query } from "../../../../database/postgres/index.js";
import _ from "lodash";

export async function isActiveTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  const ticket =
    await Query.Tickets.Select.Formant.sqlSelectActiveTicketByStreamNameAndStreamTypeAndDeviceId(
      data
    );

  clonedData.currentActiveTicket = ticket.rows;

  return clonedData;
}
