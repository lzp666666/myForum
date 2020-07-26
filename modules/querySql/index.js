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
var mysqlconfig = require('../../config/mysql');
// 引入连接池配置
var poolextend = require('./poolextend');
// 引入SQL模块
var sql = require('./sql');
// 使用连接池，提升性能

var pool = mysql.createPool(poolextend({}, mysqlconfig));
var connectionQ;//全局连接池
let querySql = {
    getConnection(ab) {//获得链接
        pool.getConnection((err, connection) => {
            ab && ab(err,connection)
        })
    },
    query(connection,sqlString, data, bb) {
        connection.query(sqlString, data, (err, result) => {
            bb && bb(err, result)
        })
    },
    Data(sqlString, data = {}, cb) {
        this.getConnection((err,connection) => {
           this.query(connection,sqlString, data, (err, result) => {
                cb && cb(err, result)
            })
            //释放
            connection.release();
        })
    },
}
module.exports = querySql;
