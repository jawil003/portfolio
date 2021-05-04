import MailService from "../services/mail.service";
import { ContactRequestType } from "../interfaces/graphql/contactRequest.type";
import { ololog } from "../config/logger";
import FakeMailService from "../services/fakemail.service";

const ContactRequestResolver = {
  Mutation: {
    send: async (
      _: unknown,
      {
        contactRequest,
      }: {
        contactRequest: ContactRequestType;
      },
    ) => {
      const mailService =
        process.env.NODE_ENV ===
        "production"
          ? MailService.get()
          : await FakeMailService.get();

      try {
        await await mailService.send(
          contactRequest,
        );
        ololog.info(
          "MailService request successful",
          contactRequest,
        );
      } catch (err) {
        ololog.error(
          "MailService request failed",
          err,
        );
        throw err;
      }

      return contactRequest;
    },
  },
};
export default ContactRequestResolver;
