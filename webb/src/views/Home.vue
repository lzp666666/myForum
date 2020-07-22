<template>
  <div class="home">
    <div class="list" v-for="item in dataList" :key="item.key">
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
      dataList: []
    }
  },
  created() {
    var that = this;
    this.axios.get('/queryAll')
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          that.dataList = res.data
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
.foot{
  margin-top: 5px;
  font-size: 12px;
}
</style>
