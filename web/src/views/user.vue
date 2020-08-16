<template>
  <div class="bai-hd">
    <div class="dis-flex NT-a bg-white" style="height:6rem">
      <img class="portrait" :src="portrait()" />
      <div class="info">
        <div class="real_name">
          {{userInfo.real_name||'undefind'}}
          <span class="font-10">{{userInfo.username}}</span>
        </div>
        <div class="user_sign">{{userInfo.user_sign||'未设置个性签名'}}</div>
      </div>
    </div>
    <div class="NT-a martop-15 bg-white text-center publish" @click="$router.push('publish')">发表文章</div>
    <div class="NT-a martop-15 bg-white text-center publish" @click="$router.push('publishVideo')">发表视频</div>
    <div class="NT-a martop-15 bg-white text-center publish" @click="signOut">退出登录</div>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
    this.userInfo = this.$store.state.userInfo
    console.log(this.userInfo)
  },
  methods: {
    signOut() {
      this.utils.clearData('userToken')
      this.utils.clearData('userInfo')
      this.$toast({
        type: "success", message: '退出登录成功', onClose: () => {
          this.$router.push('login')
        }
      });
    },
    portrait(){
      var that=this;
      if(this.userInfo.portrait.indexOf('default:')!= -1){
        return require('../assets/img/portrait/'+that.userInfo.portrait.split('default:')[1]+'.jpg')
      }else{
        return that.userInfo.portrait
      }
    }
  }
}
</script>

<style scoped>
.portrait {
  width: 100px;
}
.info {
  padding: 0 20px;
}
.real_name {
  font-size: 30px;
  color: #ff9800;
}
.user_sign {
  margin-top: 10px;
  color: #4c4848;
}
.publish {
  font-size: 20px;
  padding: 15px 0;
}
</style>>

</style>
