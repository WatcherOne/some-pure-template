/***************************************/
/*  name:    js操作cookie的封装
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/

export default {
  getValue: (keyName) => {
		const cookieArray = document.cookie.split(";"); 
		for(let i = 0; i < cookieArray.length; i++) { 
			let arr = cookieArray[i].split("=");
			if(arr[0] == keyName) return arr[1];
		} 
		return ""; 
	},
	
	// 参数days格式为天数
	setValue: (keyName, value, days = 30) => {
		const expire = new Date();
		expire.setTime(expire.getTime() + days*24*60*60*1000);
		document.cookie = `${keyName}=${escape(value)};expires=${expire.toUTCString()}`;
	},

	deleteValue(keyName) {
		const expire = new Date();
		expire.setTime(expire.getTime() - 1);
		const value = this.getValue(keyName);
		if(value != "") {
			document.cookie = `${keyName}=${value};expires=${expire.toUTCString()}`;
		}
	},

  clear: () => {  
		const keyName_array = document.cookie.match(/[^ =;]+(?=\=)/g);
		if(keyName_array) {
			const len = keyName_array.length;
			for(let i in keyName_array) {
				document.cookie = `${keyName_array[i]}=0;expires=${new Date(0).toUTCString()}`;  
			}
		}
	}
}
