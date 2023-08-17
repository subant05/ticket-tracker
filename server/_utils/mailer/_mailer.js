import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const emailConfig = {
  from: process.env.GMAIL_USER,
  to: process.env.GMAIL_TO,
  subject: "",
  text: "",
};

const genericMessage = async (subject, body) => {
  let info = "";

  try {
    info = await transport.sendMail({
      ...emailConfig,
      subject: subject,
      text: body,
    });
  } catch (e) {
    console.log(`MAILER ERROR,  ${subject} : `, e.message);
    console.log(`MAILER ERROR,  ${subject} : `, e.stack);
  } finally {
    return info;
  }
};

export { transport, genericMessage };
