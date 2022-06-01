### 遇到的问题

1. 启动项目时报错(即vue is not contructor) <br/>
   解决方法：不能用const-require引进模块，只能有es5特性的import

2. 会碰到很多eslint报错问题，详情只能去百度(#^.^#)

3. 在.vue文件中的methods中的函数定义不能用箭头函数，不然里面的this.变量不能代表真正的值