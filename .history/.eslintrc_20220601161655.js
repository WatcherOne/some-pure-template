module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'generator-star-spacing': 'off',
        'no-multi-spaces': 0,
        'semi-spacing': [0],
        'no-mixed-spaces-and-tabs': [2, false],
        'space-before-function-paren': [0, false],
        'keyword-spacing': 0,
        'no-tabs': 'off',
        'no-new-object': 2,
        'no-new-require': 2,
        'no-new-symbol': 2,
        'no-new-wrappers': 2,
        'one-var': 0,
        'index': ['off', 2],
        'vue/multi-word-component-names': 'off',
        'no-undef': 0,
        'no-unused-vars': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
