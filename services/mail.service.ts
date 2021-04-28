import { ContactRequestType } from "../types/typeDefs/contactRequest.type";
import axios from "axios";

const {
  SEND_IN_BLUE_API_KEY_V3: api_key,
  SEND_IN_BLUE_SENDER_NAME: sender_name,
  SEND_IN_BLUE_SENDER_EMAIL: sender_email,
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
            email: sender_email,
            name: sender_name,
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
          "api-key": api_key,
        },
      },
    );
  }
}
