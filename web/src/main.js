import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/logo/iconfont.css'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.prototype.axios=axios
Vue.use(Vant);
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')