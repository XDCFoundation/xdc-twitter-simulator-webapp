import { httpService } from "../managers/httpService";
import { httpConstants } from "../constants";

export default {
  getSaveTweetList,
  getReadTweetList,
  getReadGraphData,
  getSaveGraphData,
  getBasicSearch,
  getAdvanceSearch,
  getMapHashtags,
  getTweetDetails,
  getMaxTps,
  saveMaxTps
};

async function saveMaxTps(requestData) {
  let url =
    process.env.REACT_APP_BASE_URL_TWITTER + httpConstants.API_END_POINT.SAVE_MAX_TPS;

return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
   requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
async function getSaveTweetList() {
  let url =
    process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_SAVED_TWEET;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getReadTweetList() {
  let url =
    process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_READ_TWEET;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getReadGraphData() {
  let url =
    process.env.REACT_APP_BASE_URL_TWITTER +
    process.env.REACT_APP_READ_SPEED_DATA;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getSaveGraphData() {
  let url =
    process.env.REACT_APP_BASE_URL_TWITTER +
    process.env.REACT_APP_SAVING_SPEED_DATA;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getBasicSearch(requestData) {
  let url =
    process.env.REACT_APP_BASE_URL_TWITTER +
    process.env.REACT_APP_BASIC_SEARCH +
    requestData;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getAdvanceSearch(requestData) {
  let url =
    process.env.REACT_APP_BASE_URL_TWITTER +
    process.env.REACT_APP_ADVANCE_SEARCH +
    "name=" +
    requestData.username +
    "&keyword=" +
    requestData.keyword +
    "&hash=" +
    requestData.hash;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getTweetDetails(requestData) {
  let url =
    process.env.REACT_APP_BASE_URL_TWITTER +
    process.env.REACT_APP_ARCHIVE_TWEET_FROM_TESTNET_FOR_ADVANCE_SEARCH +
    requestData;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getMapHashtags() {
  let url =
    process.env.REACT_APP_BASE_URL_TWITTER +
    process.env.REACT_APP_TRENDING_HASHTAG;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getMaxTps() {
    let url =
    process.env.REACT_APP_BASE_URL_TWITTER +
    process.env.REACT_APP_MAX_TPS_COUNT
  
    return httpService(
      httpConstants.METHOD_TYPE.GET,
      { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
      {},
      url
    )
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject();
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
  }