import _ from "lodash";
import { Query } from "../../../../database/postgres/index.js";

export async function geAssociatedStreamFormatting(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const associatedDataFormatting =
    await Query.Tickets.Select.Formant.sqlSelectRuleTicketAssocStreamFormatting(
      data
    );

  if (associatedDataFormatting.rows.length) {
    clonedData.associatedDataFormatting = associatedDataFormatting.rows;
  } else clonedData.associatedDataFormatting = [];

  return clonedData;
}
