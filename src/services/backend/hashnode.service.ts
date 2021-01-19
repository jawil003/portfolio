import { gql } from "@apollo/client";
import { hashnodeClient } from "@apollo/myclient";

export default class HashnodeService {
  public static async getMyPosts() {
    hashnodeClient.query<{
      user: User;
    }>({
      query: gql`
        {
          user(username: $username) {
            publication {
              posts {
                title
                type
                cuid
                coverImage
              }
            }
          }
        }
      `,
      variables: {
        username:
          process.env
            .HASHNODE_API_USERNAME,
      },
    });
  }
}

interface User {
  publication: {
    posts: {
      title: string;
      type: string;
      cuid: string;
      coverImage: string;
    }[];
  };
}
