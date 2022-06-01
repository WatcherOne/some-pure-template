/***************************************/
/*  name:    时间格式化函数
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/

export default {
  getYear: (nowDate = new Date()) => {
		return nowDate.getFullYear();
	},
	getMonth: (nowDate = new Date()) => {
		return nowDate.getMonth() + 1;
	},
	getDay: (nowDate = new Date()) => {
		return nowDate.getDate();
	},
	getWeek: (type = '星期', nowDate = new Date()) => {
		const weeks = ['日', '一', '二', '三', '四', '五', '六'];
		return `${type}${weeks[nowDate.getDay()]}`
	},
	getHour: (nowDate = new Date()) => {
		return nowDate.getHours();
	},
	getMinute: (nowDate = new Date()) => {
		return nowDate.getMinutes();
	},
	getSecond: (nowDate = new Date()) => {
		return nowDate.getSeconds();
	},
	getTime(type) {
		let time = "";
		switch(type) {
			case 'YYYY:MM:DD': time = `${this.getYear()}:${this.getMonth()}:${this.getDay()}`; break;
			default: time = `${this.getYear()}-${this.getMonth()}-${this.getDay()}`
		}
		return time;
	}
}
