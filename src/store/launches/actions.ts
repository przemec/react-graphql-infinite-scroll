import { launch } from "../../api/graphql_response_models";
import * as C from "./constants"

export const enum launchesOperations {
  ADD = "ADD_LAUNCHES",
  CLEAR = "CLEAR_LAUNCHES",
};

export function addLaunches(newlaunches: launch[]): C.AddLaunchesAction {
  return { type: launchesOperations.ADD, newlaunches };
}

export function clearLaunches(): C.ClearLaunchesAction {
  return { type: launchesOperations.CLEAR };
}
