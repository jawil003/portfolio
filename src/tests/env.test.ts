export {};

test("CheckIfTestmodeEnabled", async () => {
  expect(process.env.NODE_ENV).toBe(
    "test",
  );
});

test("CheckIfGraphQLUrlIsProvided", async () => {
  expect(
    process.env.GRAPHQL_URL,
  ).toBeDefined();
});
