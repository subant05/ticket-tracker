import _ from "lodash";
import { sqlSelectRuleCombineProperties } from "../../../../database/postgres/queries/tickets/select/formant.js";

export async function getCombinedDatapoints(data) {
  if (!data || data === null) return null;

  try {
    const clonedData = _.cloneDeep(data);
    const combinedDatapoints = await sqlSelectRuleCombineProperties(clonedData);

    if (!combinedDatapoints.rows.length) return clonedData;
    if (!clonedData.latestDatapoint) clonedData.latestDatapoint = {};

    combinedDatapoints.rows.forEach((item) => {
      const props = item.combine_property_names.split(",");
      const values = [];
      props.forEach((objProps) => {
        values.push(clonedData[objProps]);
      });
      clonedData.latestDatapoint[
        props.join(item.combine_property_deliminator)
      ] = values.join(item.combine_value_deliminator);
    });

    return clonedData;
  } catch (e) {
    console.log("ERROR COMBINING DATAPOINTS: ", e.message);
    console.log("ERROR COMBINING DATAPOINTS: ", e.staack);
    return null;
  }
}
