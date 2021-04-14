import { gql } from "@apollo/client";
import { cmsClient } from "@apollo/myclient";
import KnowledgeCategory from "model/KnowledgeCategory.model";

export default class KnowledgeService {
  public static async getAllKnowledgeCategoriesWithItems() {
    const {
      data: { knowledgeCategories },
    } = await cmsClient.query<{
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
