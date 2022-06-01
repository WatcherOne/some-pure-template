# package.json 部分字段说明

> ### 1.name
```java
- 必填
- 包的名字
1.不要把node、js放在名字中
2.可能为作为参数被传入require()，所以应该比较短
3.用npm registry查看名字是否已经被使用
```
<hr/>

> ### 2.version
```java
- 必填
- 包的版本
```
<hr/>

> ### 3.description
```java
- 非必填
- 描述信息
```
<hr/>

> ### 4.keywords
```java
- 非必填
- 关键词
```
<hr/>

> ### 5.scripts
```java
- 非必填
- 指定运行脚本命令的npm命令行缩写(npm run + '')
```
<hr/>

> ### 6.homepage
```java
- 非必填
- 项目官网的url
```
<hr/>

> ### 7.bugs
```java
- 非必填
- 该项目提交问题的url和邮件地址
- 格式(可指定一个或两个)
{
  "url": "http://xxx",
  "email": "xxx@qq.com"
}
```
<hr/>

> ### 8.license
```java
- 非必填
- 指定许可证
- 格式(或者更复制的许可条件)
{ "license": "BSD/MIT" }
```
<hr/>

> ### 9.people fields
```java
- 非必填
- author是一个人，contributors是一堆人的数组
```
<hr/>

> ### 10.main
```java
- 非必填
- 配置一个文件名指向模块的入口程序
1.这应该是一个相对于根目录的文件路径
2.若包名字为foo，用户require("foo"),main配置模块的exports对象会被返回
```
<hr/>

> ### 11.repository
```java
- 非必填
- 指定代码存放的地方
```
<hr/>

> ### 12.dependencies
```java
- 非必填
- 给一组包名指定版本范围的一个hash
```
<hr/>

> ### 13.devDependencies
```java
- 非必填
- 加载不需要你开发所使用的外部测试或文档框架
```
<hr/>

> ### 14.engines
```java
- 非必填
- 指定工作的node版本
```
<hr/>

> ### 15.cpu
```java
- 非必填
- 指定特定的cpu架构
```
<hr/>

> ### 16.private
```java
- 非必填(默认false)
- 设置是否私有，为true则npm就不会发布它
```
<hr/>

> ### 17.browserslist
```java
- 非必填
- 设置限制浏览器条件: ['',''...]
1. last 2 versions ==== 每个浏览器中最新的两个版本
2. ie 6-8 ============= 选择包含ie6-8的版本
3. Firefox > 20 ======= 火狐版本号大于20
```
<hr/>
