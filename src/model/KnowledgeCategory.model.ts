import KnowledgeItem from "./KnowledgeItem.model";

export default interface KnowledgeCategory {
  title: string;
  description: string;
  items: KnowledgeItem[];
}
