import _ from "lodash";
import { getStreams } from "../../../_utils/services/formant/getStreams.js";

export async function getAssociatedStreamData(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  const associatedStreamData = await getStreams(
    clonedData.deviceId,
    clonedData.time,
    clonedData.associatedStreams.map((assoc) => assoc.stream_name)
  );

  if (Object.keys(associatedStreamData).length) {
    clonedData.associatedStreamData = associatedStreamData;
  } else {
    clonedData.associatedStreamData = {};
    clonedData.associatedStreams.forEach((assoc) => {
      clonedData.associatedStreamData[assoc.stream_name] =
        assoc.stream_name === "update_status"
          ? parseInt(clonedData.vpu_software_version)
          : null;
    });
  }

  return clonedData;
}
