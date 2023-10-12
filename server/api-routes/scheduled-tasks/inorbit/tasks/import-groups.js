import { client } from "../../../../database/postgres/connection.js";
import { getGroups } from "../../../_utils/services/inorbit/getGroups.js";
import { endProcess } from "./_utils/endProcess.js";

export const importGroups = async (res) => {
  try {
    const groups = await getGroups();
    console.log(groups);

    Promise.all(
      groups.map(async (group) => {
        // console.log(group)
        return await client.query(
          `INSERT INTO vehicles.group (
            name, 
            group_id)
            VALUES (
              $1,
              $2
            )
            ON CONFLICT (name) 
            DO UPDATE SET name = $1, 
            group_id = $2
            RETURNING *
        `,
          [group.name, group.id]
        );
      })
    ).then(
      () => {
        endProcess(res);
      },
      (e) => {
        console.log(e);
        endProcess(res);
      }
    );
  } catch (e) {
    console.log(e);
    endProcess(res);
  }
};
