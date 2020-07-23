import Vue from 'vue';
import Vuex from 'vuex';
import utils from '@/assets/js/utils.js';
Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    // 存储token
    userToken: utils.getData('userToken') ? utils.getData('userToken') : '',
    userInfo: utils.getData('userInfo') ? utils.getData('userInfo') : ''
  },

  mutations: {
    // 修改token，并将token存入localStorage
    saveToken(state, data) {
      state.userToken = data;
      utils.putData('userToken', data)
    },
    saveInfo(state, data) {
      state.userInfo = data;
      utils.putData('userInfo', data)
    },
  }
});

export default store;