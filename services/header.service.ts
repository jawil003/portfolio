import {
  indexHeader,
  errorHeader,
} from "../config/headers";

export default class HeaderService {
  public static getIndex() {
    return indexHeader;
  }

  public static getError() {
    return errorHeader;
  }
}

export interface Header {
  title: string;
  subtitle: string;
}
