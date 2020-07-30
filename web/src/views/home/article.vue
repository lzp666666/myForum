<template >
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <h1 class="hhh">{{data.title}}</h1>
    <div class="content" v-html="data.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: ''
    }
  },
  created() {
    this.axios.get('forum/article/' + this.$route.params.id)
      .then((res) => {
        if (res.status === 200) {
          this.data = res.data.data[0]
        }
      })
  }
}
</script>
<style  scoped>
.hhh {
  margin-top: 15px;
  text-align: center;
}
.content {
  padding: 0 20px;
  margin-top: 20px;
}
</style>