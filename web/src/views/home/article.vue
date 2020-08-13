<template >
  <div class="article">
    <van-nav-bar title="文章" left-text="返回" left-arrow @click-left="$router.go(-1)">
      <template #right>
        <van-icon name="ellipsis" size="20" @click="showShare=true" />
      </template>
    </van-nav-bar>
    <div class="centen-s">
      <h1 class="hhh">{{data.title}}</h1>
      <div class="content" v-html="data.content"></div>
    </div>
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: '',
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],
    }
  },
  created() {
    this.axios.get('forum/article/' + this.$route.params.id)
      .then((res) => {
        if (res.status === 200) {
          this.data = res.data.data[0]
        }
      })
  },
  methods: {
  }
}
</script>
<style  >
.article .hhh {
  margin-top: 15px;
  text-align: center;
}
.article .content {
  padding: 0 20px;
  margin-top: 20px;
}
.article .content img {
  width: 100%;
}
</style>