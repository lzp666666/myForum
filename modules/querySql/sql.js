//sql.js
// SQL语句封裝
var user = {
    index: {
        queryAll: 'SELECT * FROM article_list',//全部文章
        queryCategory: 'SELECT * FROM category_list',//全部分类
        queryCategroyId:'SELECT * FROM article_list where categroy = ?'//指定分类
    },
    user: {
        userLogin: 'SELECT * FROM user WHERE username = ?',
        userLogio: 'insert into user set ?',
    }
}

    // insert: 'INSERT INTO article_list(id, name, age) VALUES(?,?,?)',
    // update: 'UPDATE article_list SET name=?, age=? WHERE id=?',
    // delete: 'DELETE FROM article_list WHERE id=?',
    // queryById: 'SELECT * FROM article_list WHERE id=?',
    ;
module.exports = user;