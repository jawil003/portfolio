/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { buildAxiosFetch } from "@lifeomic/axios-fetch";
import axios from "axios";
import { createHttpLink } from "apollo-link-http";

const cmsLink = createHttpLink({
  uri: process.env.GRAPHQL_URL,
  fetch: buildAxiosFetch(
    axios as any,
  ) as any,
});

const localLink = createHttpLink({
  uri:
    "https://localhost:3000/api/graphql",
  fetch: buildAxiosFetch(
    axios as any,
  ) as any,
});

export const cmsClient = new ApolloClient(
  {
    link: cmsLink as any,
    cache: new InMemoryCache(),
  },
);

export const localClient = new ApolloClient(
  {
    link: localLink as any,
    cache: new InMemoryCache(),
  },
);
