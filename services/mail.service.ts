import { ContactRequestType } from "src/types/typeDefs/contactRequest.type";
import { createTransport } from "nodemailer";

const {
  EMAIL_USERNAME: user,
  EMAIL_PASSWORD: pass,
  EMAIL_SERVICE: service,
} = process.env;

const transporter = createTransport({
  service,
  auth: {
    user,
    pass,
  },
});

export default class MailService {
  public static async send(
    mail: ContactRequestType,
  ) {
    const {
      description,
      emailAdress,
      name,
      title,
    } = mail;
    await transporter.sendMail({
      from: `"${name}" <${emailAdress}>`,
      to: user,
      subject: title,
      html: description,
    });
  }
}
