import { gql } from "apollo-server-micro";

export interface ContactRequestType {
  name: string;
  emailAdress: string;
  title: string;
  description: string;
}

export const ContactRequestString = `
    name: String!
    emailAdress: String!
    title: String!
    description: String!
  `;

const ContactRequest = gql`
type ContactRequest {
  ${ContactRequestString}
}
`;
export default ContactRequest;
