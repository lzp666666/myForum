<template>
  <div class="find">
    <iframe
      src="//player.bilibili.com/player.html?aid=244221692&bvid=BV1uv411i7DD&cid=223724992&page=1"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      auto="true"
      allowfullscreen="true"
    ></iframe>
  </div>
</template>
<style >
.find iframe {
  min-height: 100vh;
}
.bai-tabbar {
  background-color: transparent !important;
}
</style>
<script>
export default {
  //player-mobile-control-btn
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
    // 监听（绑定）滚轮 滚动事件
  },
  methods: {
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      if (scroll < 0) {
        this.video()
      } else {
        this.video()
      }
    },
    video() {
        
    }
  }
}
</script>