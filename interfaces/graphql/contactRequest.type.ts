import { gql } from "apollo-server-micro";

export interface ContactRequestType {
  name: string;
  email: string;
  title: string;
  message: string;
}

export const ContactRequestString = `
    name: String!
    email: String!
    title: String!
    message: String!
  `;

const ContactRequest = gql`
type ContactRequest {
  ${ContactRequestString}
}
`;
export default ContactRequest;
