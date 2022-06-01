# A pure template for 又优化了一次

依赖版本有很大关系导致运行不起来

```
webpack，vue
```

> 文件目录结构(有所改动)
```javascript
├── dist               // 编译之后输出文件的目录
├── src                // 应用逻辑代码存放区域
│   ├── lib            // 存放npm上找不到的第三方库
│   │   ├── backbone.js
│   │   └── underscore.js
│   ├── static         // 存放静态资源
│   │   └── logo.png
│   ├── app.html       // 部件模板
│   ├── app.js         // 部件代码
│   └── app.less       // 部件样式
├── index.html         // 应用首页模板
├── index.js           // 应用入口
├── package.json       // 工程配置文件
└── webpack.config.js  // webpack配置文件
```
