import { client, pool } from "../../../connection.js";

export const sqlUpdateRulesById = async (data) => {
  let rule = {
    rows: [],
  };

  try {
    const insertConditions = data.rule_conditions
      .map((cond) => {
        return `(${data.id}, '${cond.condition}', '${cond.operator}', '${cond.value}')`;
      })
      .join(",");

    rule = await client.query(
      `
      WITH up_rule AS (
      UPDATE rules.formant
      SET  stream_name=$2, stream_type=$3
      WHERE id= $1
    
      RETURNING *
    )
    
    INSERT INTO rules.formant_conditions (rule_id, condition, operator, value)
    VALUES ${insertConditions}
    ON CONFLICT (rule_id, condition, value) DO NOTHING  

    RETURNING *
    `,
      [parseInt(data.id), data.streamName, data.streamType]
    );

    console.log(rule);
  } catch (e) {
    console.log("FORMANT UPDATE RULE ERROR", e.message);
    console.log("FORMANT UPDATE RULE ERROR", e.stack);
  } finally {
    return rule;
  }
};
