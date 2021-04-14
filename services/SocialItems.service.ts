import { gql } from "@apollo/client";
import { cmsClient } from "@apollo/myclient";

export default class SocialItemsService {
  public static async getAll() {
    const {
      data: { socialItems },
    } = await cmsClient.query<{
      socialItems: SocialItem[];
    }>({
      query: gql`
        {
          socialItems {
            name
            href
            icon {
              title
            }
          }
        }
      `,
    });
    return socialItems;
  }
}

export interface SocialItem {
  name: string;
  href: string;
  icon: { title: string };
}
