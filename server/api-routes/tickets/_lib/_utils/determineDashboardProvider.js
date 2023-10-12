import _ from "lodash";

export function determineDashboardProvider(req) {
  try {
    const clonedData = _.cloneDeep(req);

    clonedData.body.dashboard = !clonedData.query.dashboard
      ? "formant"
      : clonedData.query.dashboard;

    console.log(clonedData.body.dashboard);

    return clonedData;
  } catch (e) {
    return null;
  }
}
