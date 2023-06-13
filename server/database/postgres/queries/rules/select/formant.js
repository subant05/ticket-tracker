import { client, pool } from "../../../connection.js";

export const sqlSelectRulesByStreamName = async (data) => {
  let rules = { rows: [] };

  try {
    const { streamName = "" } = data;
    rules = await client.query(
      `
      select 
        rules.formant.id as id,
        rules.formant.stream_name,
        rules.formant.stream_type,
        rules.formant_conditions.condition,
        rules.formant_conditions.operator,
        rules.formant_conditions.value,
        rules.formant_formatting.key as formatting_key,
        rules.formant_formatting.value as formatting_value,
        rules.formant_associated_streams.stream_name as associated_stream_name,
        rules.formant_associated_stream_conditions.condition as associated_stream_condition,
        rules.formant_associated_stream_conditions.operator as associated_stream_operator,
        rules.formant_associated_stream_conditions.value as associated_stream_value,
        rules.formant_associated_stream_formatting.key as associated_stream_formatting_value,
        rules.formant_associated_stream_formatting.value as associated_stream_formatting_key
      from rules.formant
      left outer join rules.formant_conditions ON rules.formant_conditions.rule_id = rules.formant.id
      left outer join rules.formant_formatting ON rules.formant_formatting.rule_id = rules.formant.id
      left outer join rules.formant_associated_streams ON rules.formant_associated_streams.rule_id = rules.formant.id
      left outer join rules.formant_associated_stream_conditions ON rules.formant_associated_stream_conditions.assoc_id = rules.formant_associated_streams.id
      left outer join rules.formant_associated_stream_formatting ON rules.formant_associated_stream_formatting.associated_stream_id = rules.formant_associated_streams.id
      where rules.formant.stream_name LIKE '%${streamName}%'
    `,
      []
    );
  } catch (e) {
    console.log("FORMANT SELECT TICKETS ERROR", e.message);
    console.log("FORMANT SELECT TICKETS ERROR", e.stack);
  } finally {
    return rules;
  }
};
