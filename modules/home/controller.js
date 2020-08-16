var querySql = require('../querySql/index');
var sql = require('../querySql/sql');
var jwt = require('jsonwebtoken');  //用来生成token
var e = require('express');
var secretOrPrivateKey = 'zxcvbnm123456'
let controller = {
    category(req, res, next) {
        querySql.Data('SELECT * FROM category_list', function (err, results) {
            res.json({ status: 200, message: '获取成功', data: results });
        });
    },
    article(req, res, next) {
        querySql.Data('SELECT * FROM article_list', function (err, results) {
            res.json({ status: 200, message: '获取成功', data: results });
        })
    },
    articleId(req, res, next){
        querySql.Data('SELECT * FROM article_list where id = ?', req.params.id, function (err, results) {
            res.json({ status: 200, message: '获取成功', data: results });
        });
    },
    categroyId(req, res, next) {
        querySql.Data('SELECT * FROM article_list where categroy = ?', req.params.id, function (err, results) {
            res.json({ status: 200, message: '获取成功', data: results });
        });
    },
    publish(req, res, next) {
        querySql.Data('insert into article_list set ?', { title: req.body.title, content: req.body.content, categroy: req.body.categroy }
            , function (err, results) {
                console.log(err)
                res.json({ status: 200, message: '发表成功', data: results });
            });
    },
    publishVideo(req, res, next){
        querySql.Data('insert into video set ?', { title: req.body.title, content: req.body.content}
        , function (err, results) {
            console.log(err)
            res.json({ status: 200, message: '发表成功', data: results });
        });
    }
}
module.exports = controller