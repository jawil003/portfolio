import axios from "axios";
import { ContactRequestType } from "../interfaces/graphql/contactRequest.type";

const {
  SEND_IN_BLUE_API_KEY_V3: apiKey,
  SEND_IN_BLUE_SENDER_NAME: senderName,
  SEND_IN_BLUE_SENDER_EMAIL: senderEmail,
} = process.env;
export default class MailService {
  public static async send({
    title,
    description,
    emailAdress: email,
    name,
  }: ContactRequestType) {
    await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      JSON.stringify({
        sender: {
          name,
          email,
        },
        to: [
          {
            email: senderEmail,
            name: senderName,
          },
        ],
        subject: `Willey3x37.de Anfrage: ${title}`,
        textContent: description,
        replyTo: {
          name,
          email,
        },
      }),
      {
        headers: {
          Accept: "application/json",
          "Content-Type":
            "application/json",
          "api-key": apiKey,
        },
      },
    );
  }
}
