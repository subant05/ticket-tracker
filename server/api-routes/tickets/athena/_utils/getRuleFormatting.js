import { sqlSelectRuleTicketFormatting } from "../../../../database/postgres/queries/tickets/select/formant.js";
import _ from "lodash";

export async function getRuleFormatting(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const dataFormatting = await sqlSelectRuleTicketFormatting(data);

  clonedData.dataFormatting = dataFormatting.rows;

  return clonedData;
}
