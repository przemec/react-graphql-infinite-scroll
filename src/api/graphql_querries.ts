import { gql } from "graphql-request";

export const past_launches_query = (limit: number, offset: number) => gql`
  {
    launchesPast(limit: ${limit}, offset: ${offset}) {
      id
      rocket {
        rocket_name
      }
      mission_name
      launch_success
      launch_date_utc
      details
      links {
        flickr_images
      }
    }
  }
`;
