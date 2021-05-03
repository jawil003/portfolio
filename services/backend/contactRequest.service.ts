import { ContactRequestType } from "../../interfaces/graphql/contactRequest.type";
import { mutate } from "../../config/client";

export default class ContactRequestService {
  public static async do({
    name,
    title,
    message,
    email,
  }: ContactRequestType) {
    await mutate(
      `mutation {
      send(
    contactRequest: {
      name: "${name}"
      email: "${email}"
      title: "${title}"
      message: "${message}"
    }
  ) {
    name
    email
  }
}`,
    );
  }
}
