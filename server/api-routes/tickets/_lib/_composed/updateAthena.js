import Congruity from "congruity";
import { addFormantLinkToAthenaVpuMeticsUploadTable } from "../_utils/addFormantLinkToAthenaVpuMeticsUploadTable.js";

export const updateAthena = Congruity.fn.asyncCompose(async (result) =>
  result.asyncMap(addFormantLinkToAthenaVpuMeticsUploadTable)
);
