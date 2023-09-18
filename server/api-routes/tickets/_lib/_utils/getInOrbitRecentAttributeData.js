import _ from "lodash";
import fetch from "node-fetch";

export async function getInOrbitRecentAttributeData(req) {
  if (!req || req.body === null) return null;

  try {
    const clonedData = _.cloneDeep(req);

    const {
      entity: { id: robotId },
      componentId: attributeId,
    } = clonedData.body;

    const response = await fetch(
      `https://${process.env.IN_ORBIT_URI}/robots/${robotId}/attributes/${attributeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-inorbit-app-key": `${process.env.IN_ORBIT_API_KEY}`,
          Accept: "application/json",
        },
        redirect: "follow",
      }
    );

    const attributeData = await response.json();

    clonedData.body = {
      ...attributeData.value,
      inOrbit: clonedData.body,
      attribute: attributeData.attribute,
    };

    return clonedData;
  } catch (e) {
    console.log("ERROR GETTING INORBIT ATTRIBUTE DATAPOINTS: ", e.message);
    console.log("ERROR GETTING INORBIT ATTRIBUTE DATAPOINTS: ", e.staack);
    return null;
  }
}
