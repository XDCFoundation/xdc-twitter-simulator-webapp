import {combineReducers} from "redux";
import user from "./user";
import stats from './stats';
import readTweet from './readTweets';

export default combineReducers({
    user,
    // stats,
    // readTweet
});