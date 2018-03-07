var express = require('express');
var router = express.Router();
const oauthController = require('../controllers/oauth.js')
// console.log('=================');
// console.log(oauthController);
/* GET users listing. */
router.get('/', oauthController.searchHacktivTweet);
router.get('/timeline', oauthController.ownTimeline);
router.post('/search', oauthController.searchTwitter);
router.post('/post', oauthController.postTweet);


module.exports = router;
