import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { ApolloLogPlugin } from "apollo-log";
import ContactRequestResolver from "../../resolvers/contactRequest.resolver";
import ContactRequestInput from "../../inputtypes/contactRequest.inputtype";
import ContactRequest from "../../interfaces/graphql/contactRequest.type";
import Mutation from "../../interfaces/graphql/mutation.type";
import Query from "../../interfaces/graphql/query.type";

const cors = Cors();
const plugins = [
  ApolloLogPlugin({ timestamp: true }),
];

const apolloServer = new ApolloServer({
  typeDefs: [
    ContactRequest,
    ContactRequestInput,
    Mutation,
    Query,
  ],
  resolvers: [ContactRequestResolver],
  plugins,
});

export default cors((req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
