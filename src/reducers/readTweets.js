import { eventConstants } from "../constants";

let initialState = {
  tweets: [],
};

export default function readTweet(state = initialState, action) {
  switch (action.type) {
    case eventConstants.UPDATE_READ_TWEETS:
      return {
        ...state,

        tweets: action.data,
      };
      default:
        return state;
  }
}
