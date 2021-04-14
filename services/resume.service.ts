import { gql } from "@apollo/client";
import { cmsClient } from "@apollo/myclient";
import ResumeItem from "../model/ResumeItem.model";

export default class ResumeService {
  public static async getAllResumeItems() {
    const {
      data: { resumeItems },
    } = await cmsClient.query<{
      resumeItems: ResumeItem[];
    }>({
      query: gql`
        {
          resumeItems {
            title
            start_year
            end_year
            description
          }
        }
      `,
    });
    return resumeItems;
  }
}
