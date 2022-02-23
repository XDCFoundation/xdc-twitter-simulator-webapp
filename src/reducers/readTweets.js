import { eventConstants } from "../constants";
import { sessionManager } from "../managers/sessionManager";
import { cookiesConstants } from "../constants";

let tweetDetails = sessionManager.getDataFromCookies(cookiesConstants.UPDATED_TWEETS);

let initialState = {
  tweets: tweetDetails ? tweetDetails : [],
};

export default function readTweet(state = initialState, action) {
  switch (action.type) { 
    case eventConstants.UPDATE_READ_TWEETS:
      sessionManager.setDataInCookies(action.data ? action.data : state.tweets, cookiesConstants.UPDATED_TWEETS);
      return {
        ...state,

        tweets: action.data,
      };
    default:
      return state;
  }
}
