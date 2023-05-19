import { getTags } from "../../../_utils/services/expert-connect/getTags.js";
import { sqlInsertExpertConnectTags } from "../../../../database/postgres/queries/personnel/insert/expert-connect.js";

export const importTags = async (res) => {
  try {
    const tags = await getTags();
    const insertedTags = await sqlInsertExpertConnectTags(tags);

    console.log(insertedTags.rows);

    if (res) res.send("Submission Success");
    else process.exit(0);
  } catch (e) {
    console.log(e);

    if (res) res.send("Submission Failed");
    else process.exit(1);
  }
};
