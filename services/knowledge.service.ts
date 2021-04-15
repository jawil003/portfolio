import { knowledgeItems } from "../config/items";
export default class KnowledgeService {
  public static getAll() {
    return knowledgeItems;
  }
}
