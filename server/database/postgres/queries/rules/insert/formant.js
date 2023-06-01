import { client, pool } from "../../../connection.js";

export const sqlInsertFormantRules = async (data) => {
  let rule = { rows: [] };

  try {
    const {
      streamName,
      streamType,
      rule_conditions,
      rule_formatting,
      associated_streams,
    } = data;
    const formant_conditions = rule_conditions
      .map((item) => {
        return `((select id from ins_formant_rule), '${item.condition}', '${item.operator}', '${item.value}')`;
      })
      .join(",");
    const formant_formatting = rule_formatting
      .map((item) => {
        return `((select id from ins_formant_rule), '${item.key}','${item.value}')`;
      })
      .join(",");
    const formant_associated_streams = associated_streams
      .map((item) => {
        return `((select id from ins_formant_rule), '${item.streamName}')`;
      })
      .join(",");

    // const formant_associated_stream_conditions = associated_streams.map(item=>{
    //     `WHEN ins_formant_associated_streams.stream_name = '${item.streamName}' THEN `
    // }).join(" ")

    let ruleStr = `
    WITH ins_formant_rule AS(
      insert into rules.formant(stream_name, stream_type)
      values('${streamName}', '${streamType}')

      returning *
    )
    , ins_formant_conditions AS (
      insert into rules.formant_conditions (
        rule_id, 
        condition,
        operator, 
        value
      ) VALUES ${formant_conditions}
      
      returning *
    )`;

    if (rule_formatting.length)
      ruleStr =
        ruleStr +
        `, ins_formant_formatting AS (
          insert into rules.formant_formatting(
            rule_id, 
            key, 
            value
          ) VALUES ${formant_formatting}
          
          returning *
        )`;

    if (formant_associated_streams.length)
      ruleStr =
        ruleStr +
        `, ins_formant_associated_streams AS (
        insert into rules.formant_associated_streams (
          rule_id, 
          stream_name)
        VALUES ${formant_associated_streams}
        
        returning *
      )`;

    ruleStr =
      ruleStr +
      `
     select 
      stream_name, 
      stream_type
      
    from ins_formant_rule`;

    console.log(ruleStr);

    rule = await client.query(ruleStr, []);
  } catch (e) {
    console.log("FORMANT RULE INSERT ERROR", e.message);
    console.log("FORMANT RULE INSERT STACK", e.stack);
  } finally {
    return rule.rows;
  }
};
