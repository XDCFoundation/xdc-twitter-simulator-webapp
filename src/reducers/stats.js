import { eventConstants } from "../constants";

let initialState = {
  markers: [],
};

export default function stats(state = initialState, action) {
  switch (action.type) {
    case eventConstants.UPDATE_MARKERS:
      return {
        ...state,

        markers: action.data,
      };
      default:
        return state;
  }
}
