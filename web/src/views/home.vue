<template>
  <div class="home">
    <van-tabs v-model="tabsActive" animated swipeable @click="tabsActiveFn">
      <van-tab title="推荐"></van-tab>
      <van-tab v-for="item in dataList.category" :key="item.id" :title="item.name"></van-tab>
    </van-tabs>
    <div class="list" v-for="item in dataList.article" :key="item.key">
      <div class="title">{{item.title}}</div>
      <div class="conten">{{item.content}}</div>
      <div class="foot">0赞同-0评论</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      dataList: { article: [], category: [] },
      tabsActive: 0
    }
  },
  created() {
    this.queryAll()
  },
  methods: {
    queryAll() {
      var that = this;
      this.axios.get('forum/article')
        .then((res) => {
          if (res.status === 200) {
            that.dataList.article = res.data.data
          }
        })
      this.axios.get('forum/category')
        .then((res) => {
          if (res.status === 200) {
            that.dataList.category = res.data.data
          }
        })
    },
    tabsActiveFn(name, title) {
      var that = this;
      if (name === 0) {
        that.queryAll()
      } else {
        that.axios.get('forum/categroyId/' + name)
          .then((res) => {
            if (res.status === 200) {
              that.dataList.article = res.data.data
            }
          })
      }
    }
  }
}
</script>
<style scoped>
.home {
  padding: 15px;
}
.list {
  margin-top: 10px;
  background: #ffffff;
  box-shadow: 10px 10px 20px #929aa5, -10px -10px 20px rgb(194, 192, 192);
  padding: 10px;
}
.conten {
  font-size: 13px;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.foot {
  margin-top: 5px;
  font-size: 12px;
}
</style>
