import { Query } from "../../../../database/postgres/index.js";
import _ from "lodash";

export async function getRules(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const rules =
    await Query.Tickets.Select.Formant.sqlSelectRulesByStreanNameAndStreamType(
      data
    );

  clonedData.rules = rules;
  clonedData.rule_id = rules.rows[0].rule_id;

  return clonedData;
}
