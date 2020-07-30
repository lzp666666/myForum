<template>
  <div class="bai-tabbar">
    <router-link
      tag="div"
      class="tabbar-nav"
      v-bind:class="[index===thisIndex ? 'this' : '']"
      v-for="(item,index) in tabbarData"
      :key="item.key"
      @click.native="changeTab(index)"
      :to="item.url||''"
    >
      <span class="icon-box">
        <span class="iconfont iconshouye icon" :class="item.logo"></span>
        <span class="tabbar-nav-word">{{item.name}}</span>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbarData: [
        { logo: "iconshouye", name: '主页', url: '/' },
        { logo: "iconfaxian", name: '发现' },
        { logo: "iconxiaoxi", name: '消息' },
        { logo: "iconyonghu", name: '我的', url: 'user' }
      ],
      thisIndex: 0
    }
  },
  created(){
     this.thisIndex=this.utils.getData('router-index',true)||0
  },
  methods: {
    changeTab(index) {
      this.thisIndex = index
      this.utils.putData('router-index',index,true)
    }
  }
}
</script>

<style>
.bai-tabbar {
  background-color: #fff;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
}
.bai-tabbar .tabbar-nav {
  height: 65px;
  width: 65px;
  border-radius: 10px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #fff;
}
.icon-box {
  display: block;
  padding: 8px 0;
}
.bai-tabbar .this {
  box-shadow: inset 18px 18px 30px #d1d9e6, inset -18px -18px 30px #fff;
}
.icon {
  display: block;
  text-align: center;
  font-size: 28px !important;
}
.tabbar-nav-word {
  font-size: 11px;
  display: block;
  text-align: center;
}
</style>