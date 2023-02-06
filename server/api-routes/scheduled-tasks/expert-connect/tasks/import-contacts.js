import { getContacts } from "../../../_utils/services/expert-connect/getContacts";
import { sqlInsertExpertConnectContacts } from "../../../../database/postgres/queries/personnel/insert/expert-connect";

export const importContacts = async (res) => {
  try {
    const contacts = await getContacts()
    const insertedContacts = await sqlInsertExpertConnectContacts(contacts)

    console.log(insertedContacts.rows)

    if(res)
        res.send("Submission Success")
    else 
        process.exit(0)

  } catch (e) {
    console.log(e)

    if(res)
        res.send("Submission Failed")
    else 
        process.exit(1)
  }
}