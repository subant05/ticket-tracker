const { client, pool } = require("../../../connection.js")
import moment from "moment"

export const sqlQueryExpertConnectTeamByDeviceName = async (deviceName) =>{
  let team = {rows:[{ec_id: process.env.EXPRESS_TEAM_ID}]}
  const rxp = new RegExp(/[0-9]+/gi)

  try {
      const device_number = deviceName.match(rxp);

      if(!device_number)
        throw new Error("Number designation wasn't found in device name")
      
      team = await client.query(`
          Select 
            ec_id,
            name,
            template,
            division
          From personnel.expert_connect_teams
          Where name LIKE '%${device_number[0]}'
      `,
        []
      )

  }catch(e){
      console.log("EXPERT CONNECT TEAM SELECT BY DEVICE NAME ERROR", e.message)
      console.log("EXPERT CONNECT TEAM SELECT BY DEVICE NAME STACK", e.stack)

  } finally {
    return team.rows[0].ec_id
  }
}
