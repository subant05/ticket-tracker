import _ from "lodash";

export function getInOrbitDataSourceDefinitionFromComponentId(req) {
  if (!req || req.body === null) return null;
  try {
    const clonedData = _.cloneDeep(req);
    let componentId = clonedData.body.componentId;

    switch (componentId) {
      case "autonomyStopManualIntervention":
        componentId = "autonomyStateReport";
        break;
      default:
        break;
    }

    clonedData.body = {
      ...clonedData.body,
      componentId,
    };

    return clonedData;
  } catch (e) {
    console.log(
      "ERROR PARSING INORBIT DATA FOR DATASOURCE DEFINITION: ",
      e.message
    );
    console.log(
      "ERROR PARSING INORBIT DATA FOR DATASOURCE DEFINITION: ",
      e.stack
    );

    return null;
  }
}
