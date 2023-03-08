import { getAdvisors } from "../../../_utils/services/expert-connect/getAdvisors.js";
import { sqlInsertExpertConnectAdvisors } from "../../../../database/postgres/queries/personnel/insert/expert-connect.js";

export const importAdvisors = async (res) => {
  try {
    const advisors = await getAdvisors();
    const insertedAdvisors = await sqlInsertExpertConnectAdvisors(advisors);

    console.log(insertedAdvisors.rows);

    if (res) res.send("Submission Success");
    else process.exit(0);
  } catch (e) {
    console.log(e);

    if (res) res.send("Submission Failed");
    else process.exit(1);
  }
};
