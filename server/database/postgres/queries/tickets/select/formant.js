const { client, pool } = require("../../../connection.js")

export const sqlCheckIfTicketExists = async (data) =>{
  let shouldCreateTicket = false

  try {

     const ticket = await client.query(`
        SELECT * FROM tickets.formant
        WHERE device_id = $1
        AND stream_name = $2
        AND stream_type = $3
        AND active = TRUE
        ORDER BY ID DESC
        LIMIT 1
      `,[
        data.deviceId
        , data.stream_name
        , data.stream_type
      ])

      if(!ticket.rows.length){
          // STATE DEMOTION
        if(data.value == 0 && data.stream_name === "vadc_diagnostics") {
          shouldCreateTicket= true
        } 

        console.log(1)
      }else {
        const existingTicket = ticket.rows[0]

        // STATE DEMOTION
        if(data.value > 0 && data.stream_name === "vadc_diagnostics") {

          const update  = await client.query(`
            UPDATE tickets.formant
              SET active = FALSE
            WHERE id = $1
          `,[
            existingTicket.id
          ])

          console.log(2)
          
        } else if( existingTicket.value != data.value 
          || existingTicket.message != data.message
          || existingTicket.severity != data.severity){
            await client.query(`
              UPDATE tickets.formant
                SET active = FALSE
              WHERE id = $1
            `,[
              existingTicket.id
            ])

            console.log(3)

            shouldCreateTicket = true
        }
      }

  }catch(e){
      console.log("FORMANT SELECT EXISTING TICKET ERROR", e.message)
      console.log("FORMANT SELECT EXISTING TICKET STACK", e.stack)

  } finally {
    console.log("SHOULD UPDATE: ",  shouldCreateTicket)
    return shouldCreateTicket
  }
}