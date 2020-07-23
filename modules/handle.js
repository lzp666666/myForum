//handel.js
/*
    数据增删改查模块封装
    req.query 解析GET请求中的参数 包含在路由中每个查询字符串参数属性的对象，如果没有则为{}
    req.params 包含映射到指定的路线“参数”属性的对象,如果有route/user/：name，那么“name”属性可作为req.params.name
    req.body通常用来解析POST请求中的数据
     +req.query.id 可以将id转为整数
 */
// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var mysqlconfig = require('../config/mysql');
// 引入连接池配置
var poolextend = require('./poolextend');
// 引入SQL模块
var sql = require('./sql');
// 引入json模块
var json = require('./json');
// 使用连接池，提升性能
var jwt = require('jsonwebtoken');  //用来生成token
const e = require('express');
var secretOrPrivateKey = 'zxcvbnm123456'
var pool = mysql.createPool(poolextend({}, mysqlconfig));
var userData = {
    queryAll: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query(sql.index.queryAll, function (err, result) {
                res.json(result);
                connection.release();
            });
        });
    },
    userLogin: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query(sql.user.userLogin, req.body.username, function (err, results) {
                let content = { name: req.body.username }; // 要生成token的主题信息
                let token = jwt.sign(content, secretOrPrivateKey, {
                    expiresIn: 60 * 60 * 6  // 6小时过期
                });
                if (results.length === 0) {
                    if (!req.body.type) {
                        connection.query(sql.user.userLogio, { username: req.body.username, password: req.body.password }, function (err, results) {
                            res.json({ status: 200, message: '注册成功', token: token,userData:req.body});
                        })
                    } else {
                        res.json({ status: 0, message: "账号不存在" });
                    }
                } else {
                    if (!req.body.type) {
                        res.json({ status: 0, message: "账号已经存在了" });
                    } else {
                        if (req.body.username === results[0].username && req.body.password === results[0].password) {
                            res.json({ status: 200, message: '登录成功', token: token, userData: results[0] });
                        } else {
                            res.json({ status: 0, message: "密码错误" });
                        }
                    }
                }
                connection.release();
            })
        })
    }

};
module.exports = userData;