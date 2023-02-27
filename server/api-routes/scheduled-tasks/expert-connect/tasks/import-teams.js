import { getTeams } from "../../../_utils/services/expert-connect/getTeams";
import { sqlInsertExpertConnectTeams } from "../../../../database/postgres/queries/personnel/insert/expert-connect";

export const importTeams = async (res) => {
  try {
    const teams = await getTeams();
    const insertedTeams = await sqlInsertExpertConnectTeams(teams);

    console.log(insertedTeams.rows);

    if (res) res.send("Submission Success");
    else process.exit(0);
  } catch (e) {
    console.log(e);

    if (res) res.send("Submission Failed");
    else process.exit(1);
  }
};
