import { socialItems } from "../config/socialItems";
export default class SocialItemsService {
  public static getAll() {
    return socialItems;
  }
}

export interface SocialItem {
  name: string;
  href: string;
  icon: { title: string };
}
