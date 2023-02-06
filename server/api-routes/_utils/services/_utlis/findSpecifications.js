import { parseDeliminatedData } from "./parseDeliminatedData"

export const findSpecifications = (description="") => {
  let returnedSpec = {}

  try {
    if(misc.includes("bundle")){
      const bundleNumber = misc.match(/[0-9]+/gi)
      returnedSpec.bundle = bundleNumber || 0
    }
   
    returnedSpec = parseDeliminatedData(description, "@@specifications", returnedSpec)
   
  } catch (e) {
    console.log("Error Finding Specifications In EC Ticket")

  } finally {

    return returnedSpec
  }

}