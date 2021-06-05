var Twitter = require('twitter');
var fs = require("fs");
var request = require("request");
 
var client = new Twitter({
    consumer_key: 'zKkjzj5LmGHvCssAEXsFfm324',
    consumer_secret: 'tcLNU2tikltEcLNXljRRvfqXmGZjufjI5J3lrLrzd3zQx22l6y',
    access_token_key: '1399619139694563329-ag2qMDTiFHyGLDox2Hk2rcbf6SxP8Y',
    access_token_secret: 'eQ6HZ70J3gwEruVoGFLpy7NUSX911wYvHOFkPQMk9ZvLs'
  });
 
  
//   client.get('search/tweets', { q: '#tesla since:2020-04-15', count: 10 }, function(err, data, response) {
//       const tweets = data.statuses
//       // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
//       .map(tweet => tweet.text)
//       .filter(tweet => tweet.toLowerCase().includes('elon'));
//       console.log(tweets);
//     })

// var stream = client.stream('statuses/filter', {track: 'javascript'});
// stream.on('data', function(event) {
//   console.log(event && event.text);
// });


var params = {
    id: '1',
    // count: 5
}
client.get('trends/place', params, gotData);

    function gotData(err, data, response) {
        var tweets = data;
        console.log(JSON.stringify(tweets, undefined, 2));
    }
