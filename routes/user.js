var express = require('express');
var router = express.Router();
var controller = require('../modules/user/controller');
/* GET users listing. */
router.post('/logon', function(req, res, next) {//登录
	console.log('1')
	controller.login(req, res, next)
});
// querySql.Data('SELECT * FROM article_list where categroy = ?', 1, function (err, result) {
// 	res.json({ list: result });
//   });
module.exports = router;
