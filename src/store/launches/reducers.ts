import { launchesOperations } from "./actions";
import * as C from "./constants";

const launches = (state = [], action: C.AddLaunchesAction | C.ClearLaunchesAction) => {
  switch (action.type) {
    case launchesOperations.ADD:
      return [...state, ...action.newlaunches];
    case launchesOperations.CLEAR:
      state = [];
      return state;
    default:
      return state;
  }
};

export default launches;
