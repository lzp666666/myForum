//sql.js
// SQL语句封裝
var user = {
    index: {
        queryAll: 'SELECT * FROM article_list',
        queryCategory: 'SELECT * FROM category_list'
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