import { gql } from "@apollo/client";
import { hashnodeClient } from "@apollo/myclient";

export default class HashnodeService {
  public static async getMyPosts() {
    const {
      data,
    } = await hashnodeClient.query<{
      user: User;
    }>({
      query: gql`
        query Me($username: String!) {
          user(username: $username) {
            publication {
              posts {
                title
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
    return data;
  }
}

interface User {
  publication: {
    posts: {
      title: string;
      cuid: string;
      coverImage: string;
    }[];
  };
}
