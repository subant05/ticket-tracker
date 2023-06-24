import _ from "lodash";

export const specificationParser = (data) => {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  const returnedObj = {};

  try {
    const firstIndex =
      clonedData.description.toLowerCase().indexOf("@@specifications") +
      "@@specifications".length;

    const lastIndex =
      firstIndex +
      clonedData.description.toLowerCase().slice(firstIndex).indexOf("@@end");

    const descriptionData = clonedData.description.slice(firstIndex, lastIndex);

    descriptionData.split(",").forEach((rawSpec) => {
      const specArr = rawSpec.split("=");

      if (specArr[0].trim().length && specArr[1]) {
        const key = specArr[0]
          .trim()
          .replace(/([^\w])|([0-9])/gi, "")
          .toLowerCase();
        returnedObj[key] = !returnedObj[key]
          ? specArr[1].trim()
          : returnedObj[key];
      }
    });

    clonedData.specifications = returnedObj;

    return clonedData;
  } catch (e) {
    console.log("Error Finding Specifications In EC Ticket");
    return null;
  }
};

export function parseDeliminatedData(marker, defaultObj = {}) {
  return function (data) {
    if (!data || data === null) return null;

    const clonedData = _.cloneDeep(data);

    const returnedObj = defaultObj;

    try {
      const firstIndex =
        clonedData.description.toLowerCase().indexOf(marker) + marker.length;
      const lastIndex =
        firstIndex +
        clonedData.description.toLowerCase().slice(firstIndex).indexOf("@@end");
      const descriptionData = clonedData.description.slice(
        firstIndex,
        lastIndex
      );

      descriptionData.split(",").forEach((rawSpec) => {
        const specArr = rawSpec.split("=");

        if (specArr[0].trim().length && specArr[1]) {
          const key = specArr[0]
            .trim()
            .replace(/([^\w])|([0-9])/gi, "")
            .toLowerCase();
          returnedObj[key] = !returnedObj[key]
            ? specArr[1].trim()
            : returnedObj[key];
        }
      });

      clonedData[marker.replace(/@/gi, "")] = returnedObj;

      return clonedData;
    } catch (e) {
      console.log("Error Finding Specifications In EC Ticket");
      return null;
    }
  };
}
