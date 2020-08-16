import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/logo/iconfont.css'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/bai.css';
import './assets/css/style.css';
import utils from './assets/js/utils.js';
Vue.prototype.axios = axios
Vue.prototype.utils = utils
Vue.use(Vant);
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
Vue.config.productionTip = false
//  路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {  // 判断该路由是否需要登录权限
    if (utils.getData('userToken')) {  // 判断当前的token是否存在 ； 登录存入的token
      next();
    } else {
      next('login')
    }
  }
  else {
    next();
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')