import { client, pool } from "../../../connection.js";
import moment from "moment";

export const sqlInsertExpertConnectContacts = async (data) => {
  let contacts = { rows: [] };

  try {
    const contactsInsertValue = data
      .map((contact) => {
        return `('${contact.id}',
                '${contact.firstName || null}',
                '${contact.lastName || null}',
                '${contact.phone || null}',
                '${contact.email || null}'
                )`;
      })
      .join(",");

    contacts = await client.query(
      `
          INSERT INTO personnel.expert_connect_contacts
          (
            ec_id,
            first_name,
            last_name,
            phone,
            email
          )
          VALUES ${contactsInsertValue}
          ON CONFLICT (ec_id)
          DO UPDATE 
          SET first_name = EXCLUDED.first_name, 
          last_name = EXCLUDED.last_name,
          email = EXCLUDED.email,
          phone = EXCLUDED.phone
          
          RETURNING *
      `,
      []
    );
  } catch (e) {
    console.log("EXPERT CONNECT CONTACTS INSERT ERROR", e.message);
    console.log("EXPERT CONNECT CONTACTS INSERT STACK", e.stack);
  } finally {
    return contacts;
  }
};

export const sqlInsertExpertConnectAdvisors = async (data) => {
  let advisors = { rows: [] };

  try {
    const advisorsInsertValue = data
      .map((advisor) => {
        return `('${advisor.id}',
                '${advisor.firstName || null}',
                '${advisor.lastName || null}',
                '${advisor.phone || null}',
                '${advisor.email || null}'
                )`;
      })
      .join(",");

    advisors = await client.query(
      `
          INSERT INTO personnel.expert_connect_advisors
          (
            ec_id,
            first_name,
            last_name,
            phone,
            email
          )
          VALUES ${advisorsInsertValue}
          ON CONFLICT (ec_id)
          DO UPDATE 
          SET first_name = EXCLUDED.first_name, 
          last_name = EXCLUDED.last_name,
          email = EXCLUDED.email,
          phone = EXCLUDED.phone
          
          RETURNING *
      `,
      []
    );
  } catch (e) {
    console.log("EXPERT CONNECT ADVISORS INSERT ERROR", e.message);
    console.log("EXPERT CONNECT ADVISORS INSERT STACK", e.stack);
  } finally {
    return advisors;
  }
};

export const sqlInsertExpertConnectTeams = async (data) => {
  let teams = { rows: [] };

  try {
    const teamsInsertValue = data
      .map((team) => {
        return `('${team.id}',
                '${team.name || null}',
                '${team.template || 0}',
                '${team.division || 0}'
                )`;
      })
      .join(",");

    teams = await client.query(
      `
          INSERT INTO personnel.expert_connect_teams
          (
            ec_id,
            name,
            template,
            division
          )
          VALUES ${teamsInsertValue}
          ON CONFLICT (ec_id)
          DO UPDATE 
          SET name = EXCLUDED.name, 
          template = EXCLUDED.template,
          division = EXCLUDED.division
          
          RETURNING *
      `,
      []
    );
  } catch (e) {
    console.log("EXPERT CONNECT TEAMS INSERT ERROR", e.message);
    console.log("EXPERT CONNECT TEAMS INSERT STACK", e.stack);
  } finally {
    return teams;
  }
};
