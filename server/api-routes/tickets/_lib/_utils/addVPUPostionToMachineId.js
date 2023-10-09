import _ from "lodash";

export const addVPUPostionToMachineId = (vpuPosition = "") => {
  return function (req) {
    if (!req || req === null) return null;

    const clonedReq = _.cloneDeep(req);

    if (vpuPosition)
      clonedReq.body.machine_id = `${clonedReq.body.machine_id}_${vpuPosition}`;

    return clonedReq;
  };
};
