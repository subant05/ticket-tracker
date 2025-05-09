export const generateTicketDescription = (data) => {
  const {
    title = "State Demotion - ERC, SUP",
    type,
    id,
    message,
    severity,
    stream_name,
    streamName,
    stream_type,
    streamType,
    tags,
    value,
    time,
    url,
    formantUrl,
    device_id,
    bundle,
    product = "Formant",
    ERC,
    SUP,
    device_name,
    expertConnectUrl,
    jiraUrl,
    device,
    name,
    reason,
  } = data;

  return `
  ${reason ? reason + "\r\r" : ""}
  @@Specifications
  Alert Type = ${type},
  Alert Time = ${time},
  Alert Value = ${typeof value === "object" ? JSON.stringify(value) : value},
  Alert Stream Name = ${stream_name || streamName},
  Alert Stream Type = ${stream_type || streamType},
  Alert Severity = ${severity},
  Event Title: ${message},
  Formant Link = ${formantUrl},
  ExpertConnect Link = ${expertConnectUrl || "NULL"},
  JIRA Link = ${jiraUrl || "NULL"},
  BUNDLE Number= ${bundle},
  Machine ID  = ${device ? device.name : name ? name : device_name},
  ERC = ${ERC},
  SUP = ${SUP},
  @@END`;
};
