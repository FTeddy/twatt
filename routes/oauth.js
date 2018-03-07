var express = require('express');
var router = express.Router();
const oauthController = require('../controllers/oauth.js')
// console.log('=================');
// console.log(oauthController);
/* GET users listing. */
router.get('/', oauthController.searchHacktivTweet);


module.exports = router;
