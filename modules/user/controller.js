var querySql = require('../querySql/index');
var sql = require('../querySql/sql');
var jwt = require('jsonwebtoken');  //用来生成token
var e = require('express');
var secretOrPrivateKey = 'zxcvbnm123456'
let controller = {
    login(req, res, next) {
        querySql.Data(sql.user.userLogin, req.body.username, function (err, results) {
            let content = { name: req.body.username }; // 要生成token的主题信息
            let token = jwt.sign(content, secretOrPrivateKey, {
                expiresIn: 60 * 60 * 6  // 6小时过期
            });
            if (results.length === 0) {
                if (!req.body.type) {
                    querySql.Data(sql.user.userLogio, { username: req.body.username, password: req.body.password }, function (err, results) {
                        res.json({ status: 200, message: '注册成功', token: token, userData: req.body });
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
        })
    },

}

module.exports = controller