import nodemailer, {
  TestAccount,
} from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import open from "open";
import { ololog } from "../config/logger";
import { ContactRequestType } from "../interfaces/graphql/contactRequest.type";

const {
  SEND_IN_BLUE_SENDER_NAME: senderName,
  SEND_IN_BLUE_SENDER_EMAIL: senderEmail,
} = process.env;

export default class FakeMailService {
  private testAccount: Promise<TestAccount>;

  private transporter?: Mail;

  private static instance: FakeMailService;

  private constructor() {
    this.testAccount = nodemailer.createTestAccount();
  }

  public static async get() {
    if (!this.instance) {
      this.instance = new FakeMailService();
    }
    return this.instance;
  }

  public async send({
    title,
    message,
    email,
    name,
  }: ContactRequestType) {
    if (!this.transporter) {
      const resolvedTestAccount = await Promise.resolve(
        this.testAccount,
      );
      ololog.debug(
        "Test account created",
        resolvedTestAccount,
      );
      this.transporter = nodemailer.createTransport(
        {
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user:
              resolvedTestAccount.user, // generated ethereal user
            pass:
              resolvedTestAccount.pass, // generated ethereal password
          },
        },
      );
    }
    const info = await this.transporter.sendMail(
      {
        from: {
          address: email,
          name,
        },
        to: {
          name: senderName as string,
          address: senderEmail as string,
        },
        subject: `Willey3x37.de Anfrage: ${title}`,
        text: message,
      },
    );
    const testurl = nodemailer.getTestMessageUrl(
      info,
    );
    open(testurl as string);
    ololog.info(
      `Preview Email: ${testurl}`,
    );
  }
}
