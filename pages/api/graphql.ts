import { ApolloServer } from "apollo-server-micro";
import ContactRequestResolver from "../../resolvers/contactRequest.resolver";
import ContactRequestInput from "../../types/inputTypes/contactRequest.inputtype";
import ContactRequest from "../../types/typeDefs/contactRequest.type";
import Mutation from "../../types/typeDefs/mutation.type";
import Query from "../../types/typeDefs/query.type";

const apolloServer = new ApolloServer({
  typeDefs: [
    ContactRequest,
    ContactRequestInput,
    Mutation,
    Query,
  ],
  resolvers: [ContactRequestResolver],
});

export default apolloServer.createHandler(
  {
    path: "/api/graphql",
  },
);

export const config = {
  api: {
    bodyParser: false,
  },
};
