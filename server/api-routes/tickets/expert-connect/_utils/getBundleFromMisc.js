import _ from "lodash";

export function getBundleFromMisc(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    if (
      typeof clonedData.misc === "string" &&
      clonedData.misc.toLowerCase().includes("bundle")
    ) {
      const bundleNumber = clonedData.misc.match(/[0-9]+/gi);
      clonedData.bundle = bundleNumber ?? 0;
    } else {
      throw new Error("Misc Field doesn't contain a bundle ");
    }
  } catch (e) {
    console.log(e.message);
  }

  return clonedData;
}
