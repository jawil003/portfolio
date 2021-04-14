import MailService from "services/mail.service";
import { ContactRequestType } from "types/typeDefs/contactRequest.type";

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
      await MailService.send(
        contactRequest,
      );
      return contactRequest;
    },
  },
};
export default ContactRequestResolver;
