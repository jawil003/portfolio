import { ContactRequestType } from "../../types/typeDefs/contactRequest.type";
import { localClient } from "../../config/client";
import { gql } from "@apollo/client";

export default class ContactRequestService {
  public static async do({
    name,
    title,
    description,
    emailAdress,
  }: ContactRequestType) {
    await localClient.mutate({
      mutation: gql`mutation {
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
    });
  }
}
