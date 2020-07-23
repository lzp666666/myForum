<template>
  <div class="user">
    <div class="title">{{loginForm.type?'登录':'注册'}}</div>
    <van-field v-model="loginForm.username" label="用户名" placeholder="请输入用户名" />
    <van-field v-model="loginForm.password" label="密码" placeholder="请输入密码" />
    <van-row class="ccc">
      <van-col span="18" class="left" @click="switchLogin">{{loginForm.type?'没账号，点击注册':'有账号，点击登录'}}</van-col>
      <van-col span="6">
        <van-button type="default" @click="logon()">{{loginForm.type?'登录':'注册'}}</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      loginForm: { username: "", password: "", type: true },
      userToken: "",
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    logon() {
      //登录
      let that = this;
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$notify("账号或密码不能为空");
      } else {
        this.axios
          .post("user/logon", this.loginForm)
          .then((res) => {
            if (this.loginForm.type) {
              that.userToken = "Bearer " + res.data.token;
              // 将用户token保存到vuex中
              that.changeLogin({ Authorization: that.userToken });
              that.$notify({ type: "success", message: "登陆成功" });
            } else {
              if (res.data.status === 200) {
                that.$notify({ type: "success", message: res.data.message });
              } else {
                this.$notify(res.data.message);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    switchLogin() {
      this.loginForm.type = !this.loginForm.type;
    },
  },
};
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
.ccc {
  padding: 15px 20px;
}
.ccc .left {
  font-size: 13px;
}
.van-button {
  height: 35px;
}
</style>