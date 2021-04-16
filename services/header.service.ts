import { indexHeader } from "../config/headers";

export default class HeaderService {
  public static getIndex() {
    return indexHeader;
  }
}

export interface Header {
  title: string;
  subtitle: string;
}
