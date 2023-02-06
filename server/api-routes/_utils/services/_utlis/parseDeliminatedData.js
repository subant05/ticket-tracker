export const parseDeliminatedData = (description, marker, defaultObj={})=>{
  const returnedObj = defaultObj

  try {
    const firstIndex = description.toLowerCase().indexOf(marker) + marker.length
    const lastIndex = firstIndex + description.toLowerCase().slice(firstIndex).indexOf("@@end")
    const data =  description.slice(firstIndex, lastIndex)

    data.split(",").forEach(rawSpec => {
      const specArr = rawSpec.split("=")
  
      if(specArr[0].trim().length &&  specArr[1]){
        const key = specArr[0].trim().replace(/([^\w])|([0-9])/gi,'').toLowerCase()
        returnedObj[key] = !returnedObj[key] ?  specArr[1].trim() : returnedObj[key]
      }
    })

  } catch (e) {

  } finally{
    return returnedObj
  }

}
