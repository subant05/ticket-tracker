const { client, pool } = require("../../../connection.js");

export const sqlSelectRulesByStreanNameAndStreamType = async (data) => {
  let rules = { rows: [] };

  try {
    rules = await client.query(
      `
      SELECT 
        rule.id as rule_id,
        rule.stream_name,
        rule_conditions.condition,
        rule_conditions.operator,
        rule_conditions.value
      FROM rules.formant as rule
      INNER JOIN rules.formant_conditions AS rule_conditions ON rule_conditions.rule_id = rule.id
      WHERE rule.stream_name = $1 
      AND rule.stream_type = $2
    `,
      [data.stream_name, data.stream_type]
    );
  } catch (e) {
    console.log("FORMANT SELECT STEAM RULES ERROR", e.message);
    console.log("FORMANT SELECT STEAM RULES ERROR", e.stack);
  } finally {
    return rules;
  }
};

export const sqlSelectActiveTicketByStreamNameAndStreamTypeAndDeviceId = async (
  data
) => {
  let ticket = { rows: [] };
  try {
    ticket = await client.query(
      `
      SELECT * FROM tickets.formant
      WHERE device_id = $1
      AND stream_name = $2
      AND stream_type = $3
      AND active = TRUE
      ORDER BY ID DESC
    `,
      [data.deviceId, data.stream_name, data.stream_type]
    );
  } catch (e) {
    console.log("FORMANT SELECT TICKET ERROR", e.message);
    console.log("FORMANT SELECT TICKET ERROR", e.stack);
  } finally {
    return ticket;
  }
};

export const sqlSelectRuleTicketFormatting = async (data) => {
  let formatting = { rows: [] };

  try {
    formatting = await client.query(
      `
      SELECT 
        formatting.id as id,
        formatting.key,
        formatting.value
      FROM rules.formant_formatting  as formatting
      INNER JOIN rules.formant AS rule ON formatting.rule_id = rule.id
      WHERE rule.stream_name = $1 
      AND rule.stream_type = $2
    `,
      [data.stream_name, data.stream_type]
    );
  } catch (e) {
    console.log("FORMANT SELECT TICKET RULE FORMATTING ERROR", e.message);
    console.log("FORMANT SELECT TICKET RULE FORMATTING ERROR", e.stack);
  } finally {
    return formatting;
  }
};

export const sqlSelectAssociatedStreams = async (data) => {
  let associated_streams = { rows: [] };

  try {
    associated_streams = await client.query(
      `
      SELECT
        id,
        stream_name
      FROM rules.formant_associated_streams
      WHERE rule_id = $1
    `,
      [data.rule_id]
    );
  } catch (e) {
    console.log("FORMANT SELECT ASSOCIATED STREAMS ERROR", e.message);
    console.log("FORMANT SELECT ASSOCIATED STREAMS ERROR", e.stack);
  } finally {
    return associated_streams;
  }
};

export const sqlSelectAssociatedStreamsConditions = async (data) => {
  let conditions = { rows: [] };

  try {
    conditions = await client.query(
      `
    SELECT
      assoc_conditions.assoc_id as id,
      assoc_streams.rule_id,
      assoc_conditions.assoc_id as assoc_id,
      assoc_streams.stream_name,
      assoc_conditions.condition,
      assoc_conditions.operator,
      assoc_conditions.value
    FROM rules.formant_associated_stream_conditions AS assoc_conditions
    INNER JOIN rules.formant_associated_streams AS assoc_streams ON assoc_conditions.assoc_id = assoc_streams.id
    WHERE assoc_streams.rule_id = $1
  `,
      [data.rule_id]
    );
  } catch (e) {
    console.log(
      "FORMANT SELECT ASSOCIATED STREAMS CONDITIONS ERROR",
      e.message
    );
    console.log("FORMANT SELECT ASSOCIATED STREAMS CONDITIONS ERROR", e.stack);
  } finally {
    return conditions;
  }
};

export const sqlSelectRuleTicketAssocStreamFormatting = async (data) => {
  let formatting = { rows: [] };

  try {
    formatting = await client.query(
      `
      SELECT 
        assoc_stream_formatting.id as id,
        assoc_stream_formatting.key,
        assoc_stream_formatting.value
      FROM rules.formant_associated_stream_formatting  as assoc_stream_formatting
      INNER JOIN rules.formant_associated_streams AS assoc_stream ON assoc_stream.id = assoc_stream_formatting.associated_stream_id
      WHERE assoc_stream.rule_id = $1
    `,
      [data.rule_id]
    );
  } catch (e) {
    console.log(
      "FORMANT SELECT ASSOCIATED STREAMS FORMATTING ERROR",
      e.message
    );
    console.log("FORMANT SELECT ASSOCIATED STREAMS FORMATTING ERROR", e.stack);
  } finally {
    return formatting;
  }
};
