import lodash from "lodash";

function filterDataByConditions(latestDatapoint = [], rules = { rows: [] }) {
  const cpObj = lodash.cloneDeep();

  return latestDatapoint.filter((datapoint) => {
    return rules.rows.find((rule) => checkCondition(rule, datapoint));
  });
}
