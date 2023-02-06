export const generateTicketDescription = (data) => {
  const {
    title= "State Demotion - ERC, SUP",
    type,
    id,
    message,
    severity,
    stream_name,
    stream_type,
    tags,
    value,
    time,
    url,
    formantUrl,
    device_id,
    bundle,
    product="Formant",
    ERC,
    SUP,
    device_name
  } = data
  
  return  `
  @@Specifications
  Alert Type = ${type},
  Alert Time = ${time},
  Alert Value = ${value},
  Alert Stream Name = ${stream_name},
  Alert Stream Type = ${stream_type},
  Alert Severity = ${severity},
  Event Title: ${message},
  Formant URL = ${formantUrl},
  ERC = ${ERC},
  SUP = ${SUP},
  BUNDLE = ${bundle},
  Vehicle = ${device_name}
  @@END`
}