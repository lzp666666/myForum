<template>
  <div class="home">
    <van-tabs class="tabs" v-model="tabsActive" animated swipeable @click="tabsActiveFn">
      <van-tab title="推荐"></van-tab>
      <van-tab v-for="item in dataList.category" :key="item.id" :title="item.name"></van-tab>
    </van-tabs>
        <div>
      <!-- <van-search v-model="value" placeholder="请输入搜索关键词" /> -->
    </div>
    <div class="content">
      <router-link
        tag="div"
        :to="{name:'article', params: {id:item.id}}"
        class="list"
        v-for="item in dataList.article"
        :key="item.key"
      >
        <div class="title">{{item.title}}</div>
        <div class="conten" v-html="item.content"></div>
        <div class="foot">0赞同-0评论</div>
      </router-link>
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
}
.content {
  background-color: #ecf0f3;
  padding-top: 6vh;
  overflow: scroll;
  height: 81vh;
  padding-bottom: 2rem;
}
.list {
  border-radius: 9px;
  background: #ffffff;
  padding: 16px;
  margin: 10px;
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
.tabs {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>
