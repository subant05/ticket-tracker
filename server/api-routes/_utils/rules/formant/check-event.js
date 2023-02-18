import { checkRules } from "./check-rules.js"
import { Query } from "../../../../database/postgres"
import { checkAssociatedStreams } from "./check-associated-streams.js"
import { generateFormantTicketTitle } from "../../formating/generateFormantTicketTitle.js"
import { generateVadcDiagnostic } from "../../formating/generateVadcDiagnostic.js"

export const checkEvent = async (data) =>{
  let shouldCreateTicket = false

  try {
     const rulesMet = await checkRules(data)
     const ticket = await Query.Tickets.Select.Formant.sqlSelectActiveTicketByStreamNameAndStreamTypeAndDeviceId(data)

      if(!ticket.rows.length && rulesMet){
          shouldCreateTicket = true

        const formatting = await Query.Tickets.Select.Formant.sqlSelectRuleTicketFormatting(data)

        formatting.rows.forEach(format=> {
          data.latestDatapoint.forEach(datapoint=>{
            if(datapoint.label === format.key)
              data[format.value] = datapoint.value
              data.value[datapoint.label] = datapoint.value
          })
        })

        await checkAssociatedStreams(data)
        generateFormantTicketTitle(data)
        generateVadcDiagnostic(data)


      } else if(ticket.rows.length && !rulesMet) {
          await Query.Tickets.Update.Formant.sqlDeactivateTickets(ticket.rows)

      } else {
        console.log(`No tickets & rules met for stream ${data.stream_name} of type ${data.stream_type}`)
      }

  }catch(e){
      console.log("FORMANT SELECT EXISTING TICKET ERROR", e.message)
      console.log("FORMANT SELECT EXISTING TICKET STACK", e.stack)

  } finally {
    console.log("SHOULD UPDATE: ",  shouldCreateTicket)
    return shouldCreateTicket
  }
}