import { socialItems } from "../config/socialItems";

export default class SocialItemsService {
  public static getAll() {
    return socialItems;
  }
}
