import fetch from 'node-fetch'
import dotenv from 'dotenv'
import process from 'process';
import { refreshToken } from "../../authentication/formantAuth";
import moment from 'moment';

dotenv.config()
const dataParser = {
  update_status: (bundlePoints) =>{
    const rxp = new RegExp(/(Running:\s)([0-9]+)(,)/gi)
    const latestBundleDatapoint = bundlePoints.pop()
    const bundleValue = latestBundleDatapoint[1]  
    const regexParsed = rxp.exec(bundleValue)[2]
  
    return parseInt(regexParsed)
  }
}

export const getStreams = async ( device_id, time = new Date(), streams = [])  => {
  
  if(!device_id)
    throw new Error("Device Id is needed to query streams")

  const startDateTime = moment(time).subtract(1,'hour').utc().format()
  const endDateTime = moment(time).utc().format()
  const formantData = {}

  try {
    const isTokenValid = await refreshToken()

    if(!isTokenValid.success)
        throw new Error("Unable to log into Formant")

    const response = await fetch(`${process.env.FORMANT_API_URL}/v1/queries/queries`, {
          method:"POST",
          body:JSON.stringify({
            deviceIds: [device_id],
            names: ['update_status', ...streams],
            start: startDateTime,
            end:endDateTime
          }),
          headers:{
            "accept": "application/json",
            "content-type": "application/json",
            "Authorization": `Bearer ${process.env['FORMANT_REFRESH_TOKEN']}`
        }
      })

    const payload = await response.json()

    payload.items.forEach(item=>{
      formantData[item.name] = dataParser[item.name] ? dataParser[item.name](item.points) : item.points.pop()
    })

  } catch(e){
    console.log("FAILED TO GET VEHICLE BUNDLE FROM FORMANT", e.message)
    console.log("FAILED TO GET VEHICLE BUNDLE FROM FORMANT", e.stack)

  } finally {

    return formantData
  }

}