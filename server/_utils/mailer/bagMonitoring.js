import { genericMessage } from "./_mailer.js";

export const bagMonitoring = async (payload = {}) => {
  const payloadFormatted = JSON.stringify(payload, null, " ");

  try {
    await genericMessage(
      `${
        process.env.NODE_ENV && process.env.NODE_ENV === "development"
          ? process.env.NODE_ENV.toUpperCase() + ":"
          : ""
      } Bag Recorder`,
      `Payload
      ---------
      ${payloadFormatted} 
      `
    );
  } catch (e) {
    await genericMessage(
      `${
        process.env.NODE_ENV && process.env.NODE_ENV === "development"
          ? process.env.NODE_ENV.toUpperCase() + ":"
          : ""
      } Bag Recorder - (ERROR)`,
      `Payload
      ---------
      ${payloadFormatted} 

      Error
      ---------
      ${e.message}
      ${e.stack}
      `
    );
  }
};
