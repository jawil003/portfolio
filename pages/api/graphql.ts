import { ApolloServer } from "apollo-server-micro";
import { ApolloLogPlugin } from "apollo-log";
import type {
  NextApiRequest,
  NextApiResponse,
} from "next";
import ContactRequestResolver from "../../resolvers/contactRequest.resolver";
import ContactRequestInput from "../../inputtypes/contactRequest.inputtype";
import ContactRequest from "../../interfaces/graphql/contactRequest.type";
import Mutation from "../../interfaces/graphql/mutation.type";
import Query from "../../interfaces/graphql/query.type";

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

export default (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};
