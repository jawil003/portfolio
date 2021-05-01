import { gql } from "apollo-server-micro";
import { ContactRequestString } from "../interfaces/graphql/contactRequest.type";

const ContactRequestInput = gql`
input ContactRequestInput {
    ${ContactRequestString}
}
`;

export default ContactRequestInput;
