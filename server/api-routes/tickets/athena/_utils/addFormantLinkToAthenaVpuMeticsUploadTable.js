import { QUERY } from "../../../../database/athena/index.js";
import _ from "lodash";

export const addFormantLinkToAthenaVpuMeticsUploadTable = async (data) => {
  if (!data || data === null) return null;
  const clonedData = _.cloneDeep(data);

  if (!clonedData.athena) clonedData.athena = {};

  try {
    const result =
      await QUERY.VPU_METRICS_UPLOAD.UPDATE.addFormantLinkToVpuUpload(
        clonedData
      );

    if (!result)
      throw new Error("Unable to update VPU_METRICS_UPLOAD Athena Table");

    clonedData.athena.vpuMetricsUpload = result;
  } catch (e) {
    console.log("UPDATE ATHENA TABLE ERROR: ", e.message);
    console.log("UPDATE ATHENA TABLE ERROR: ", e.stack);
  }

  return clonedData;
};
