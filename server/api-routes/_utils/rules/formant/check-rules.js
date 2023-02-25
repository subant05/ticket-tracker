import { Query } from "../../../../database/postgres"
import { checkCondition } from "./check-condition.js"

export const checkRules = async (data) => {
  const {latestDatapoint = []} = data
  let isValid = []
  let rules = {rows:[]}

  try{
    rules = await Query.Tickets.Select.Formant.sqlSelectRulesByStreanNameAndStreamType(data)

    if(!rules.rows.length)
      throw new Error (`No rules were created for Stream Name: ${data.stream_name}, of ${data.stream_type} type`)

    isValid = latestDatapoint.filter(datapoint => {
      return rules.rows.find(rule=>checkCondition(rule,datapoint) )
    })

    data.rule_id = rules.rows[0].rule_id

    console.log("isValid: ", isValid)


  } catch (e) {
      console.log("FORMANT RULES ERROR", e.message)
      console.log("FORMANT RULES ERROR", e.stack)
  } finally {

    return isValid.length && rules.rows.length && isValid.length === rules.rows.length
  }
}