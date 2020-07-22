<template>
  <div class="user">
    <div class="title">{{title}}</div>
    <van-field v-model="loginForm.username" label="用户名" placeholder="请输入用户名" />
    <van-field v-model="loginForm.password" label="密码" placeholder="请输入密码" />
    <van-row class="ccc">
      <van-col span="18" class="left">没账号，点击注册</van-col>
      <van-col span="6">
        <van-button  type="default" @click="logon()">登陆</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      title: '账号登录',
      loginForm: { username: '', password: '' },
      userToken: ''
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    logon() {//登录
      let that = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        this.axios.post('user/logon', this.loginForm).then(res => {
          that.userToken = 'Bearer ' + res.data.token;
          // 将用户token保存到vuex中
          that.changeLogin({ Authorization: that.userToken });
          alert('登陆成功');
        }).catch(error => {
          console.log(error);
        });
      }
    },
    switchLogin() {
      this.title = '账号注册'
    }
  }
}
</script>

<style scoped>
.user {
  background-color: #fff;
  width: 80%;
  margin: 4rem auto;
  padding: 20px 15px;
  border-radius: 10px;
  box-shadow: 10px 10px 20px #929aa5, -10px -10px 20px rgb(194, 192, 192);
}
.row {
  margin-top: 10px;
}
.title {
  text-align: center;
  color: #000;
  font-size: 20px;
  margin-bottom: 15px;
}
.van-cell {
  background-color: transparent;
}
.logon {
  margin-top: 20px;
  margin-left: 70%;
}
.ccc{
  padding:15px  20px;
}
.ccc .left{
  font-size: 13px;
}
.van-button--normal{
  padding: 0 20px;
}
.van-button{
  height: 35px;
}
</style>