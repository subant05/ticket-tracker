import { generateTicketDescription } from "../../../formating/generateTicketDescription"

export const generateJiaDescription = (data) => {
  let formattedDescription = ""

  try {
    formattedDescription = generateTicketDescription(data)
  
  } catch (e) {
    console.log("Unable to Format Expert Connect Description for Jira Ticket", e.message)
  
  } finally {
    return formattedDescription

  }

}