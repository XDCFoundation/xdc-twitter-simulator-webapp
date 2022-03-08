/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */


export const httpConstants = {
    METHOD_TYPE: {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: 'application/json',
        MULTIPART_FORM_DATA: 'multipart/form-data',
        APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        IMAGE_PNG: 'image/png'
    },
    DEVICE_TYPE: {
        WEB: 'web'
    },
    API_END_POINT: {}
};

export const socialMediaLinks = {
    FACEBOOK_LINK: "https://www.facebook.com/XDCFoundation",
    TWITTER_LINK: "https://twitter.com/XDCFoundation",
    TELEGRAM_LINK: "https://telegram.me/share/url?url=https://speedtest.xdc.org:90/&text=XDC%20Speed%20Test",
    LINKED_LINK: "https://www.linkedin.com/company/xdc-foundation?trk=public_profile_topcard-current-company",
    REDDIT_LINK: "http://www.reddit.com/submit?url=https://speedtest.xdc.org&title=The%20XDC%20Speed%20Test",
    TWEET_ARCHIVE_LINK: "https://speedtest.xdc.org/",
    CONTACT_US_LINK: "https://xinfin.org/contactus",
    GITHUB_LINK: "https://github.com/XDCFoundation/",
    // SHARE_FACEBOOK_LINK: "https://www.facebook.com/sharer/sharer.php?u=http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/",
    SHARE_FACEBOOK_LINK: "https://www.facebook.com/sharer/sharer.php?u=https://speedtest.xdc.org/",
    // SHARE_TWITTER_LINK: "https://twitter.com/intent/tweet?url=http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/&text=TwitterArchiver",
    SHARE_TWITTER_LINK: "https://twitter.com/intent/tweet?url=https://speedtest.xdc.org/&text=XDC%20SpeedTest",
    // SHARE_LINKEDIN_LINK: "https://www.linkedin.com/shareArticle?mini=true&url=http://simulator-dev-566612800.us-east-2.elb.amazonaws.com/",
    SHARE_LINKEDIN_LINK: "https://www.linkedin.com/shareArticle?mini=true&url=https://speedtest.xdc.org/",
}

export const eventConstants = {
    UPDATE_MARKERS: "UPDATE_MARKERS",
    UPDATE_READ_TWEETS: "UPDATE_READ_TWEETS",
    NODE_LOCATION_EVENT: "network-stats-nodes",
    READ_TWEETS_EVENT: "read-tweets-socket",
    SAVING_TWEETS_EVENT: "BlockChain-socket",
    SAVE_COUNT_EVENT: "tweet-count-socket",
    READ_GRAPH_EVENTS: "read-speed-socket",
    SAVING_GRAPH_EVENT: "saving-speed-socket",
}

export const cookiesConstants = {
    UPDATED_TWEETS: "read-tweets"
}