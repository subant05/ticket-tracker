import { client, pool } from "../../../connection.js";

export const sqlDeleteRulesById = async (data) => {
  let rule = {
    rows: [],
  };

  try {
    rule = await client.query(
      `
      DELETE FROM rules.formant
      WHERE id = $1
    `,
      [parseInt(data.id)]
    );

    console.log(rule);
  } catch (e) {
    console.log("FORMANT DELETE RULE ERROR", e.message);
    console.log("FORMANT DELETE RULE ERROR", e.stack);
  } finally {
    return rule;
  }
};
