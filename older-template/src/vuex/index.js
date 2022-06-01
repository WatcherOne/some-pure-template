/***************************************/
/*  name:    vuex-state
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/
import Vue from 'vue';
import VueX from 'vuex';
import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(VueX);

export default new VueX.Store({
  state,
  getters,
  mutations,
  actions
})
