import Vue from 'vue'; //引入vue
//必须实例化 Vue
let vm = new Vue();
var utils = {
    // 缓存临时数据
    putData: function (key, value,type) {
        if(type){
            sessionStorage.setItem(key, JSON.stringify({ key: key, value: value }));
        }else{
            localStorage.setItem(key, JSON.stringify({ key: key, value: value }));
        }
    },
    // 获取缓存临时数据
    getData: function (key,type) {
        let data;
        if(type){
            data = JSON.parse(sessionStorage.getItem(key))
        }else{
            data = JSON.parse(localStorage.getItem(key))
        }
        if (data) { return data.value }
    },
    checkStatus: function (D, cb) {
        if (D.data.status === 0) {
            vm.$notify(D.data.message);
        } else {
            cb && cb()
        }
    },
    verify: {//验证
        userName: function (value) {
            if (value.trim() === "") {
                return "用户名不能为空";
            }
            if (value.match(/[\u4e00-\u9fa5]/)) {
                return "用户名不能为中文";
            }
            if (!/(.+){3,12}$/.test(value)) {
                return "用户名必须3到12位";
            }
        },
        email: function (value) {
            if (value === "") {
                return "邮箱不能为空"
            }
            if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)) {
                return "邮箱格式不正确";
            }
        },
        tel: function (value) {
            if (!/^[1]+\d{10}$/.test(value)) {
                return "请输入正确的电话号码"
            }
        },

        pwd: function (value) {
            if (!/(.+){6,12}$/.test(value)) {
                return '密码必须6到12位'
            }
        },
    },
}
export default utils;
