import { sqlSelectRuleTicketFormatting } from "../../../../database/postgres/queries/tickets/select/formant.js";
import _ from "lodash";

export async function getRuleFormatting(data) {
  if (!data || data === null) return null;

  try {
    const clonedData = _.cloneDeep(data);
    const dataFormatting = await sqlSelectRuleTicketFormatting(data);

    clonedData.dataFormatting = dataFormatting.rows;

    return clonedData;
  } catch (e) {
    console.log("ERROR GETTING RULE FORMATTING: ", e.message);
    console.log("ERROR GETTING RULE FORMATTING: ", e.staack);
    return null;
  }
}
