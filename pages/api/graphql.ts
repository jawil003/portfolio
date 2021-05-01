import { ApolloServer } from "apollo-server-micro";
import ContactRequestResolver from "../../resolvers/contactRequest.resolver";
import ContactRequestInput from "../../inputtypes/contactRequest.inputtype";
import ContactRequest from "../../interfaces/graphql/contactRequest.type";
import Mutation from "../../interfaces/graphql/mutation.type";
import Query from "../../interfaces/graphql/query.type";

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
