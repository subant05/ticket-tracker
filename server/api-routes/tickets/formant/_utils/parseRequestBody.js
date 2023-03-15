export function parseRequestBody(req) {
  const messageJson = JSON.parse(req.body.payload.message);
  const valueJson = JSON.parse(req.body.payload.value);
  const message = messageJson[0];
  const latestDatapoint = valueJson[valueJson.length - 1];
  return {
    eventType: req.body.eventType,
    ...req.body.payload,
    stream_name: req.body.payload.streamName,
    stream_type: req.body.payload.streamType,
    type: req.body.eventType,
    formantUrl: req.body.payload.sourceUrl,
    time: req.body.payload.time.replace("T", " "),
    message,
    messageJson,
    valueJson,
    latestDatapoint,
    valueJson,
    value: {},
  };
}
