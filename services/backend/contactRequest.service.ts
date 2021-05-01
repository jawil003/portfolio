import { ContactRequestType } from "../../interfaces/graphql/contactRequest.type";
import { mutate } from "../../config/client";

export default class ContactRequestService {
  public static async do({
    name,
    title,
    description,
    emailAdress,
  }: ContactRequestType) {
    await mutate(
      `mutation {
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
    );
  }
}
