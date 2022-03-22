import { launch } from "../../api/graphql_response_models";

export interface LaunchesProps {
  launches: launch[],
  addLaunches: Function
}
