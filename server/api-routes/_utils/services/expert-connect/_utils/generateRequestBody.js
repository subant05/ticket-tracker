import { generateTicketDescription } from "../../../formating/generateTicketDescription"

export const generateRequestBody = (data) => {
  let body = ''
  try {
    const {
      title= "State Demotion - ERC, SUP",
      type,
      id,
      message,
      severity,
      stream_name,
      stream_type,
      tags,
      value,
      time,
      url,
      formantUrl,
      device_id,
      bundle,
      product="Formant",
      ERC,
      SUP,
      name,
      device,
      team
    } = data

    body = JSON.stringify({
      title:  `${title}`
      , description: generateTicketDescription(data)
      , customerId: process.env.EXPERT_CUSTOMER_ID
      , product:product
      , serialNumber:`${device_id} | ${name}`
      , misc: null
      , resolution:null
      , teamId: team ? team : process.env.EXPRESS_TEAM_ID
      , advisorId:process.env.EXPERT_CONNECT_ADVISOR_ID
  })
  } catch(e) {
    console.log("CREATE EXPERT CONNECT TICKET BODY ERROR", e.message)
    console.log("CREATE EXPERT CONNECT TICKET BODY ERROR", e.stack)
  } finally {
    return body
  }
}