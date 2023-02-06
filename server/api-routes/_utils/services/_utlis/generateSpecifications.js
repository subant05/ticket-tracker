export const generateSpecifications = (data) =>{
  let specifications = ''
  try{
    if(!Object.keys(data).length)
      throw new Error("Unable to create specifications")
    
    specifications = `
    ${data.message}
    ------------------------
    @@Specifications
    ExpertConnect Link= ${data.expertConnectUrl},
    Formant Link = ${data.formantUrl},
    Rally Ticket = null,
    Jira Ticket = null,
    Machine ID = ${data.device_name},
    Bundle Number = ${data.bundle},
    ERC = ${data.ERC},
    SUP = ${data.SUP},
    @@END
    ------------------------
    `
  } catch(e){
    console.log("UNABLE TO CREATE SPECIFICATIONS: ", e.message)
    console.log("UNABLE TO CREATE SPECIFICATIONS: ", e.stack)

  } finally {
    return specifications
  }

}