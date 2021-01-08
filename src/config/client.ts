/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { buildAxiosFetch } from "@lifeomic/axios-fetch";
import axios from "axios";
import { createHttpLink } from "apollo-link-http";

const link = createHttpLink({
  uri: process.env.GRAPHQL_URL,
  fetch: buildAxiosFetch(
    axios as any,
  ) as any,
});

export const cmsClient = new ApolloClient(
  {
    link: link as any,
    cache: new InMemoryCache(),
  },
);
