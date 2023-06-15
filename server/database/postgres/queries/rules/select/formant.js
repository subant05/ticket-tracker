import { client, pool } from "../../../connection.js";

export const sqlSelectRulesByStreamName = async (data) => {
  let rules = {
    rows: [],
    pageInfo: {
      hasPreviousPage: false,
      hasNextPage: false,
    },
  };
  const ruleObj = {};

  try {
    const { offset = 1, limit = 10, stream_name = "" } = data;

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
      where rules.formant.stream_name ILIKE '%${stream_name.trim()}%'
    `,
      []
    );
    if (!rules.rows.length) throw new Error("No tickets found");

    const total = rules.rows[0].total;
    (rules.pageInfo = {
      hasPreviousPage: false,
      hasNextPage: false,
    }),
      (rules.pageInfo.hasPreviousPage = parseInt(offset) === 1 ? false : true);
    rules.pageInfo.hasNextPage =
      limit * offset < total && rules.rows.length === parseInt(limit)
        ? true
        : false;

    console.log(rules.pageInfo.hasPreviousPage);

    rules.rows.forEach((data) => {
      if (!ruleObj[data.id])
        ruleObj[data.id] = {
          stream_name: data.stream_name,
          stream_type: data.stream_type,
          conditions: [],
          formatting: [],
          associated_streams: {},
        };
    });

    Object.keys(ruleObj).forEach((key) => {
      rules.rows
        .filter((data) => data.id == key)
        .forEach((props) => {
          // Conditions
          if (
            props.condition &&
            !ruleObj[key].conditions.find(
              (ruleCondtion) =>
                ruleCondtion.condition === props.condition &&
                ruleCondtion.operator === props.operator &&
                ruleCondtion.value === props.value
            )
          )
            ruleObj[key].conditions.push({
              condition: props.condition,
              operator: props.operator,
              value: props.value,
            });
          // Formatting
          if (
            !ruleObj[key].formatting.find(
              (format) =>
                format.formatting_key === props.formatting_key &&
                format.formatting_value === props.formatting_value
            )
          )
            ruleObj[key].formatting.push({
              formatting_key: props.formatting_key,
              formatting_value: props.formatting_value,
            });

          // Associated Streams
          if (!ruleObj[key].associated_streams[props.associated_stream_name]) {
            ruleObj[key].associated_streams[props.associated_stream_name] = [];
            if (
              props.associated_stream_condition &&
              !ruleObj[key].associated_streams[
                props.associated_stream_name
              ].find(
                (assoc_stream_condition) =>
                  assoc_stream_condition.condition ===
                    props.associated_stream_condition &&
                  assoc_stream_condition.operator ===
                    props.associated_stream_operator &&
                  assoc_stream_condition.value === props.associated_stream_value
              )
            )
              ruleObj[key].associated_streams[
                props.associated_stream_name
              ].push({
                condition: props.associated_stream_condition,
                operator: props.associated_stream_operator,
                value: props.associated_stream_value,
              });
          } else {
            if (
              props.associated_stream_condition &&
              !ruleObj[key].associated_streams[
                props.associated_stream_name
              ].find(
                (assoc) =>
                  assoc.associated_stream_condition ==
                  props.associated_stream_condition
              )
            )
              ruleObj[key].associated_streams[
                props.associated_stream_name
              ].push({
                condition: props.associated_stream_condition,
                operator: props.associated_stream_operator,
                value: props.associated_stream_value,
              });
          }
        });
    });

    console.log(JSON.stringify(ruleObj, null, " "));
  } catch (e) {
    console.log("FORMANT SELECT RULES ERROR", e.message);
    console.log("FORMANT SELECT RULES ERROR", e.stack);
  } finally {
    rules.rows = Object.entries(ruleObj).map((keyValue) => {
      return {
        id: keyValue[0],
        ...keyValue[1],
      };
    });

    return rules;
  }
};
