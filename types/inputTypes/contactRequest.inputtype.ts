import { gql } from "@apollo/client";
import { ContactRequestString } from "../typeDefs/contactRequest.type";

const ContactRequestInput = gql`
input ContactRequestInput {
    ${ContactRequestString}
}
`;

export default ContactRequestInput;
