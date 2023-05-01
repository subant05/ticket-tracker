import { client, pool } from "../../../connection.js";
import moment from "moment";

export const sqlQueryExpertConnectTeamByDeviceName = async (deviceName) => {
  let team = { rows: [{ ec_id: process.env.EXPERT_TEAM_ID }] };
  const rxp = new RegExp(/[0-9]+/gi);

  try {
    const device_number = deviceName.match(rxp);

    if (!device_number)
      throw new Error("Number designation wasn't found in device name");

    const result = await client.query(
      `
          Select 
            ec_id,
            name,
            template,
            division
          From personnel.expert_connect_teams
          Where name LIKE 'Autonomy ${device_number[0]}'
      `,
      []
    );
    if (!result.rows.length) throw new Error("Vehicle not assigned a team");
    else team = result;
  } catch (e) {
    console.log("EXPERT CONNECT TEAM SELECT BY DEVICE NAME ERROR", e.message);
    console.log("EXPERT CONNECT TEAM SELECT BY DEVICE NAME STACK", e.stack);
  } finally {
    console.log(team.rows);
    return team.rows[0].ec_id;
  }
};
