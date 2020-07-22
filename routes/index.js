var express = require('express');
var router = express.Router();
var user = require('../modules/handle');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/queryAll', function(req, res, next) {
  user.queryAll(req, res, next);
});
module.exports = router;
