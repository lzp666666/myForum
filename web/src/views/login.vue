<template>
  <div class="user">
    <div class="title">{{loginForm.type?'登录':'注册'}}</div>
    <van-field v-model="loginForm.username" label="用户名" placeholder="请输入用户名" />
    <van-field v-model="loginForm.password" label="密码" placeholder="请输入密码" />
    <div v-show="!loginForm.type">
      <van-field v-model="loginForm.real_name" label="昵称" placeholder="请输入昵称" />
      <van-field v-model="loginForm.portrait" label="头像地址" placeholder="请输入头像地址">
        <template #button>
          <van-button size="mini" type="default" @click="popupShow=true">默认头像</van-button>
        </template>
      </van-field>
    </div>
    <van-row class="ccc">
      <van-col span="18" class="left" @click="switchLogin">{{loginForm.type?'没账号，点击注册':'有账号，点击登录'}}</van-col>
      <van-col span="6">
        <van-button type="default" @click="logon()">{{loginForm.type?'登录':'注册'}}</van-button>
      </van-col>
    </van-row>
    <van-popup class="pop-img" v-model="popupShow" position="right" :style="{ height: '100%',width:'20%'}">
      <img v-for="item in (1,10)" :key="item" @click="loginForm.portrait='default:'+item,popupShow=false" :src="require('../assets/img/portrait/'+item+'.jpg')">
    </van-popup>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      loginForm: { username: "admin", password: "123456", type: true,portrait:'default:1',real_name:''},
      popupShow: false
    };
  },
  created() {
    console.log(this.utils)
  },
  methods: {
    ...mapMutations(["saveToken", "saveInfo"]),
    logon() {
      //登录
      let that = this;
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$toast("账号或密码不能为空");
      } else {
        this.axios
          .post("user/logon", this.loginForm)
          .then((res) => {
            this.utils.checkStatus(res, () => {
              that.saveToken(res.data.token);
              that.saveInfo(res.data.userData);
              that.$toast({
                type: "success", message: res.data.message, onClose: () => {
                  this.$router.push('user')
                }
              });
            })
          })
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
.pop-img img{
  width: 100%;
}
</style>