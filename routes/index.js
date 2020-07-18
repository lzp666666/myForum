var express = require('express');
var router = express.Router();
var user = require('../modules/handle');
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  //这段仅仅为了方便返回json而已
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == 'OPTIONS') {
      //让options请求快速返回
      res.sendStatus(200);
  } else {
      next();
  }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/addUser', function(req, res, next) {
  user.add(req, res, next);
});
router.get('/queryAll', function(req, res, next) {
  user.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
  user.queryById(req, res, next);
});
router.get('/deleteUser', function(req, res, next) {
  user.delete(req, res, next);
});
router.get('/update', function(req, res, next) {
  res.render('update');
});
router.post('/updateUser', function(req, res, next) {
  user.update(req, res, next);
});
module.exports = router;
