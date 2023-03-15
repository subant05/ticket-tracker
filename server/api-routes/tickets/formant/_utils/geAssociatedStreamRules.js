import _ from "lodash";
import { Query } from "../../../../database/postgres/index.js";

export async function geAssociatedStreamRules(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const rules =
    await Query.Tickets.Select.Formant.sqlSelectAssociatedStreamsConditions(
      data
    );

  if (rules.rows.length) {
    clonedData.associatedStreamRules = rules.rows;
  } else clonedData.associatedStreamRules = [];

  return clonedData;
}
