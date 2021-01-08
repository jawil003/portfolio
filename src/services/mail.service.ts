import { ContactRequestType } from "src/types/typeDefs/contactRequest.type";
import { createTransport } from "nodemailer";
import axios from "axios";

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
  public static async request({
    name,
    title,
    description,
    emailAdress,
  }: ContactRequestType) {
    await axios.post("api/graphql", {
      data: {
        query: `
      mutation {
      send(
    contactRequest: {
      name: "${name}"
      emailAdress: "${emailAdress}"
      title: "${title}"
      description: "${description}"
    }
  ) {
    name
    emailAdress
  }
}`,
      },
    });
  }
}
