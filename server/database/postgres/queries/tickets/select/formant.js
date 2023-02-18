const { client, pool } = require("../../../connection.js")

export const sqlSelectRulesByStreanNameAndStreamType = async (data) => {
  let rules = {rows:[]}

  try {
    rules = await client.query(`
      SELECT 
        rule.stream_name,
        rule_conditions.condition,
        rule_conditions.operator,
        rule_conditions.value
      FROM rules.formant as rule
      INNER JOIN rules.formant_conditions AS rule_conditions ON rule_conditions.rule_id = rule.id
      WHERE rule.stream_name = $1 
      AND rule.stream_type = $2
    `,[
        data.stream_name
        , data.stream_type
      ])

  } catch (e) {
    console.log("FORMANT SELECT STEAM RULES ERROR", e.message)
    console.log("FORMANT SELECT STEAM RULES ERROR", e.stack)

  } finally {
    return rules;

  }
}

export const sqlSelectActiveTicketByStreamNameAndStreamTypeAndDeviceId = async (data) => {
  let ticket = {rows:[]}
  try{
    ticket = await client.query(`
      SELECT * FROM tickets.formant
      WHERE device_id = $1
      AND stream_name = $2
      AND stream_type = $3
      AND active = TRUE
      ORDER BY ID DESC
    `,[
      data.deviceId
      , data.stream_name
      , data.stream_type
    ])

  }catch(e){
    console.log("FORMANT SELECT TICKET ERROR", e.message)
    console.log("FORMANT SELECT TICKET ERROR", e.stack)

  } finally{
    return ticket
  }
}


export const sqlSelectRuleTicketFormatting = async (data)=> {
  let formatting = {rows:[]}

  try{
    formatting = await client.query(`
      SELECT 
        formatting.id as id,
        formatting.key,
        formatting.value
      FROM rules.formant_formatting  as formatting
      INNER JOIN rules.formant AS rule ON formatting.rule_id = rule.id
      WHERE rule.stream_name = $1 
      AND rule.stream_type = $2
    `,[
      data.stream_name
      , data.stream_type
    ])

  } catch(e){
    console.log("FORMANT SELECT TICKET RULE FORMATTING ERROR", e.message)
    console.log("FORMANT SELECT TICKET RULE FORMATTING ERROR", e.stack)

  } finally {
    return formatting

  }
}
