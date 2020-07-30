<template>
  <div id="app">
      <router-view />
    <baiTabbar v-show="!this.$route.meta.footShow" />
  </div>
</template>
<script>
import baiTabbar from '@/components/index/bai-tabbar'
export default {
  components: { baiTabbar },
  created() {
  }
}
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
}
* {
  padding: 0;
  margin: 0;
}
</style>