/***************************************/
/*  name:    mian-entry
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/

import mutations from './mutations.js'

export default {
	changeName({ commit }) {
		commit('changeName');
	},
	changeBirth({ commit }) {
		commit('changeBirth');
	},
	changeSex({ commit }) {
		commit('changeSex');
	},
	changeAddress({ commit }) {
		commit('changeAddress');
    },
    addCount({ commit }) {
		commit('addCount');
    },
    delCount({ commit }) {
        commit('delCount');
    }
}
