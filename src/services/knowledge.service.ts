import { gql } from "@apollo/client";
import client from "@apollo/myclient";
import KnowledgeCategory from "src/model/KnowledgeCategory.model";

export default class KnowledgeService {
  public static async getAllKnowledgeCategoriesWithItems() {
    const {
      data: { knowledgeCategories },
    } = await client.query<{
      knowledgeCategories: KnowledgeCategory[];
    }>({
      query: gql`
        {
          knowledgeCategories {
            title
            description
            items {
              title
              description
              icon {
                title
                href {
                  alternativeText
                  url
                }
              }
            }
          }
        }
      `,
    });
    return knowledgeCategories;
  }
}
