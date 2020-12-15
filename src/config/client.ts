import { ApolloClient, InMemoryCache } from "@apollo/client";
import { buildAxiosFetch } from "@lifeomic/axios-fetch";
import axios from "axios";
import { createHttpLink } from "apollo-link-http";

const link = createHttpLink({
  uri: process.env.GRAPHQL_URL,
  fetch: buildAxiosFetch(axios) as any,
});

const client = new ApolloClient({
  link: link as any,
  cache: new InMemoryCache(),
});

export default client;
