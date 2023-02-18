import { getStreams } from "../../services/formant/getStreams";

export const checkAssociatedStreams = async (data) => {
  const assocData = await getStreams(data.deviceId,data.time,[])

  Object.keys(assocData).forEach(key=>{
    if(key === "update_status")
      data["bundle"] = assocData[key]
    else
      data[key] = assocData[key]
  })
}