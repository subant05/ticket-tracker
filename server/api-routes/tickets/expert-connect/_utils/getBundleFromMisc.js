import _ from "lodash";

export function getBundleFromMisc(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (clonedData.misc.includes("bundle")) {
    const bundleNumber = clonedData.misc.match(/[0-9]+/gi);
    clonedData.bundle = bundleNumber ?? 0;
  }

  return clonedData;
}
