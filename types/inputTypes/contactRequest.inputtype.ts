import { gql } from "@apollo/client";
import { ContactRequestString } from "types/typeDefs/contactRequest.type";

const ContactRequestInput = gql`
input ContactRequestInput {
    ${ContactRequestString}
}
`;

export default ContactRequestInput;
