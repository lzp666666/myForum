//sql.js
// SQL语句封裝
var user = {
    insert: 'INSERT INTO article_list(id, name, age) VALUES(?,?,?)',
    update: 'UPDATE article_list SET name=?, age=? WHERE id=?',
    delete: 'DELETE FROM article_list WHERE id=?',
    queryById: 'SELECT * FROM article_list WHERE id=?',
    queryAll: 'SELECT * FROM article_list'
};
module.exports = user;