import _ from "lodash";
import { Query } from "../../../../database/postgres/index.js";

export async function geAssociatedStreams(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const associatedStreams =
    await Query.Tickets.Select.Formant.sqlSelectAssociatedStreams(data);

  if (associatedStreams.rows.length) {
    clonedData.associatedStreams = associatedStreams.rows;
  } else clonedData.associatedStreams = [];

  return clonedData;
}
