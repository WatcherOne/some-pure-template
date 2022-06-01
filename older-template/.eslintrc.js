module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  //此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true,
  },
  ecmaFeatures: {
    'arrowFunctions': true,
    'destructuring': true,       // 解构赋值
    'blockBindings': true,       // 块级作用域，允许使用let const
    'objectLiteralShorthandProperties': true,  // 对象字面量属性名简写
    'spread': true,  // 扩展运算符
    // 模板字符串
    'templateStrings': true,  
    'superInFunctions': true
  },
  extends: 'standard',
  // required to lint *.vue files

  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // 箭头函数用小括号括起来
    'arrow-parens': 0,
    // 函数名后面的空格忽略不报错
    'space-before-function-paren': 0,
    // allow async-await
    'generator-star-spacing': [2, { 'before': true, 'after': true }],
    'semi': [0, 'always'],
    'indent': 0,
    "no-new": 0,
    'no-tabs': 'off',
    'semi-spacing': [0, {'before': false, 'after': true}],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': [0, { vars: 'local' }]
  }
}
