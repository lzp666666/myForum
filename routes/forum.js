var express = require('express');
var router = express.Router();
var controller = require('../modules/home/controller');
/* GET home page. */
router.get('/category', function (req, res, next) {//获取所有的分类 
  controller.category(req, res, next)
});
router.get('/article', function (req, res, next) {//获取所有的帖子
  controller.article(req, res, next)
});
router.get('/article/:id', function (req, res, next) {//查找id帖子
  controller.articleId(req, res, next)
});
router.get('/categroyId/:id', function (req, res, next) {//查找分类的帖子
  controller.categroyId(req, res, next)
});
router.post('/publish', function (req, res, next) {//查找分类的帖子
  controller.publish(req, res, next)
});
router.post('/publishVideo', function (req, res, next) {//创建视频
  controller.publishVideo(req, res, next)
});
module.exports = router;
