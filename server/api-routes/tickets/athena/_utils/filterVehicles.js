import _ from "lodash";

export function filterVehicles(vehicles = []) {
  return function (req) {
    const clonedRequest = _.cloneDeep(req);

    try {
      if (
        !vehicles.length ||
        vehicles.indexOf(clonedRequest.body.machine_id) !== -1
      )
        return clonedRequest;
      else
        throw new Error(
          `Vehicle ${clonedRequest.body.machine_id} is not in the filtered vehicle list`
        );
    } catch (e) {
      console.log("ERROR FILTER VEHICLES:  ", e.message);
      console.log("ERROR FILTER VEHICLES:  ", e.stack);
      return null;
    }
  };
}
