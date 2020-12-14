import KnowledgeService from "../services/knowledge.service";
test("GetAllKnowledgeItems", async () => {
  expect(
    await KnowledgeService.getAllKnowledgeCategoriesWithItems()
  ).toBeDefined();
});
