<template>
  <div class="bai-hd">
    <div class="dis-flex NT-a bg-white">
      <img class="portrait" :src="userInfo.portrait||require('../assets/img/de.jpg')" />
      <div class="info">
        <div class="real_name">
          {{userInfo.real_name||'undefind'}}
          <span class="font-10">{{userInfo.username}}</span>
        </div>
        <div class="user_sign">{{userInfo.user_sign||'未设置个性签名'}}</div>
      </div>
    </div>
    <div class="NT-a martop-15 bg-white text-center publish">发表文章</div>
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