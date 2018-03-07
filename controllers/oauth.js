const OAuth = require('oauth')

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      `${process.env.APPCONSKEY}`,
      `${process.env.APPCONSSECRET}`,
      '1.0A',
      null,
      'HMAC-SHA1'
    );


module.exports = {
  searchHacktivTweet(req, res){
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=hacktiv8',
      `${process.env.APPTOKEN}`, //test user token
      `${process.env.APPSECRET}`, //test user secret
      function (e, data, response){
        if (e) {
          // console.log(data);
          // let error = JSON.parse(e)
          res.status(500).json({
            message: 'error retreiving api',
            err: e
          })
        } else {
          let dataJSON = JSON.parse(data)
          res.status(200).json({
            message: 'Twitter api call successful',
            data: dataJSON
          })
        }

      });

  },

  ownTimeline(req, res){
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=Werkbau&count=2',
      `${process.env.APPTOKEN}`, //test user token
      `${process.env.APPSECRET}`, //test user secret
      function (e, data, response){
        if (e) {
          res.status(500).json({
            message: 'error retreiving api',
            err: e
          })
        } else {
          let dataJSON = JSON.parse(data)
          res.status(200).json({
            message: 'Twitter api call successful',
            data: dataJSON
          })
        }

      });
  },

  searchTwitter(req, res){
    let query = req.query.q
    oauth.get(
      `https://api.twitter.com//1.1/search/tweets.json?q=`+ query,
      `${process.env.APPTOKEN}`, //test user token
      `${process.env.APPSECRET}`, //test user secret
      function (e, data, response){
        if (e) {
          res.status(500).json({
            message: 'error retreiving api',
            err: e
          })
        } else {
          let dataJSON = JSON.parse(data)
          res.status(200).json({
            message: 'Twitter api call successful',
            data: dataJSON
          })
        }

      });
  },

  postTweet(req, res){
    let status = req.query.status
    oauth.get(
      `https://api.twitter.com/1.1/statuses/update.json?status=`+ status,
      `${process.env.APPTOKEN}`, //test user token
      `${process.env.APPSECRET}`, //test user secret
      function (e, data, response){
        if (e) {
          res.status(500).json({
            message: 'error retreiving api',
            err: e
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
