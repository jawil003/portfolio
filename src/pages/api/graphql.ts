import { ApolloServer } from "apollo-server-micro";
import ContactRequestResolver from "src/resolvers/contactRequest.resolver";
import ContactRequestInput from "src/types/inputTypes/contactRequest.inputtype";
import ContactRequest from "src/types/typeDefs/contactRequest.type";
import Mutation from "src/types/typeDefs/mutation.type";
import Query from "src/types/typeDefs/query.type";

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
