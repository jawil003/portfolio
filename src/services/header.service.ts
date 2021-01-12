import { gql } from "@apollo/client";
import { cmsClient } from "@apollo/myclient";

export default class HeaderService {
  public static async getIndex() {
    const {
      data: { indexHeader },
    } = await cmsClient.query<{
      indexHeader: IndexHeader;
    }>({
      query: gql`
        {
          indexHeader {
            title
            subtitle
          }
        }
      `,
    });
    return indexHeader;
  }
}

export interface IndexHeader {
  title: string;
  subtitle: string;
}
