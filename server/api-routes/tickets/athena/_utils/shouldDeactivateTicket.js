import _ from "lodash";
import { Query } from "../../../../database/postgres/index.js";

export async function shouldDeactivateTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (clonedData.currentActiveTicket.length && !clonedData.isStreamsValid) {
    await Query.Tickets.Update.Formant.sqlDeactivateTickets(
      clonedData.currentActiveTicket
    );
    return null;
  }
}
