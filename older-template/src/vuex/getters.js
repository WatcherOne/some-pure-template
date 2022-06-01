/***************************************/
/*  name:    mian-entry
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/

import state from './state.js';

export default {
	name: (state) => {
		return state.name;
	},
	birthday: (state) => {
		return state.birthday;
	},
	sex: (state) => {
		return state.sex;
	},
	address: (state) => {
		return state.address;
	},
	count: (state) => {
		return state.count;
	}
}
