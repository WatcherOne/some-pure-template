/***************************************/
/*  name:    mian-entry
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/

import getters from './getters';

export default {
	changeName: (state, name) => {
		state.name = name;
	},
	changeBirth: (state, birthday) => {
		state.birthday = birthday;
	},
	changeSex: (state, sex) => {
		state.sex = sex;
	},
	changeAddress: (state, address) => {
		state.address = address;
	},
	addCount: (state, count) => {
		state.count = count + 1;
    },
    delCount: (state, count) => {
        state.count = count - 1;
    }
}
