import axios from "axios";

const localClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST_URL}/api/graphql`,
});

export const mutate = <
  T extends
    | Record<string, unknown>
    | Record<string, unknown>[]
>(
  value: string,
) =>
  localClient.post<T>("/", {
    mutation: value,
  });

export const query = <
  T extends
    | Record<string, unknown>
    | Record<string, unknown>[]
>(
  value: string,
) =>
  localClient.post<T>("/", {
    query: value,
  });
