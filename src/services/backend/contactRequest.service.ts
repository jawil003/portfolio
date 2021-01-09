import { ContactRequestType } from "src/types/typeDefs/contactRequest.type";
import { localClient } from "@apollo/myclient";
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
