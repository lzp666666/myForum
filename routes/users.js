var express = require('express');
var router = express.Router();
var user = require('../modules/handle');
/* GET users listing. */
router.post('/logon', function(req, res, next) {//登录
	user.userLogin(req, res, next);
});

module.exports = router;
