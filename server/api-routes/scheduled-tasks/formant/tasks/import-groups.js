import { client } from "../../../../database/postgres/connection.js";
import { getGroups } from "../../../_utils/services/formant/getGroups.js";
import { endProcess } from "./_utils/endProcess.js";

export const importGroups = async (res) => {
  try {
    const groups = await getGroups();

    Promise.all(
      groups.items.map(async (group) => {
        // console.log(group)
        return await client.query(
          `INSERT INTO vehicles.group (
            name, 
            group_id, 
            created_at,
            updated_at,
            organization_id,
            tag_key,
            tag_value,
            active,
            enabled)
            VALUES (
              $1,
              $2,
              $3,
              $4,
              $5,
              $6,
              $7,
              $8,
              $9
            )
            ON CONFLICT (name, group_id) 
            DO UPDATE SET name = $1, 
            group_id = $2, 
            created_at = $3,
            updated_at = $4,
            organization_id =$5,
            tag_key = $6,
            tag_value = $7,
            active = $8,
            enabled = $9

            RETURNING *
        `,
          [
            group.name,
            group.id,
            group.createdAt,
            group.updatedAt,
            group.organizationId,
            group.tagKey,
            group.tagValue,
            group.active,
            group.enabled,
          ]
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
