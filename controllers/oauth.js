const OAuth = require('oauth')

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      `tyDWzfKPvPZzAqYyztmlCXEqk`,
      `MqN2N8BMfFH2p7XAtJAr9Mf2ee29dmGjQkRgM5u0KyC8KEjBnA`,
      '1.0A',
      null,
      'HMAC-SHA1'
    );


module.exports = {
  searchHacktivTweet(req, res){
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=hacktiv8',
      `105831931-cuvXQkW8RF9Fb8bsXCVByxOltMwahthsocHcRaj4`, //test user token
      `36gnZF9f8mwE3eEqvvwxx4BDk5YUjQqfkTVusqOma95uP`, //test user secret
      function (e, data, response){
        if (e) {
          // console.log(data);
          let error = JSON.parse(e)
          res.status(500).json({
            message: 'error retreiving api',
            err: error
          })
        } else {
          let dataJSON = JSON.parse(data)
          res.status(200).json({
            message: 'Twitter api call successful',
            data: dataJSON
          })
        }

      });

  }


}
