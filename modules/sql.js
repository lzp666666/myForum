//sql.js
// SQL语句封裝
var user = {
    index:{
        queryAll: 'SELECT * FROM article_list'
    },
    user:{
        userLogin:'SELECT * FROM user WHERE username = ?'
    }
}
    
    // insert: 'INSERT INTO article_list(id, name, age) VALUES(?,?,?)',
    // update: 'UPDATE article_list SET name=?, age=? WHERE id=?',
    // delete: 'DELETE FROM article_list WHERE id=?',
    // queryById: 'SELECT * FROM article_list WHERE id=?',
;
module.exports = user;