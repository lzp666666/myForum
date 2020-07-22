//json.js
//封装接送模块
var json = function(data,title) {
    var returnJson;
    switch(data){
        case 0:
            returnJson={
                code:0,
                title:title+'失败'
            }
            return returnJson
    }
    
};
module.exports = json;