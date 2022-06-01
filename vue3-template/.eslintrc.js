module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        'semi': [0,  'always'],
        'no-multi-spaces': 0,
        'no-mixed-spaces-and-tabs': [2, false],
        'space-before-function-paren': [0, false],
        'keyword-spacing': 0,
        'quotes': 0,
        'no-tabs': 0,
        'indent': [0, false],
        'one-var': 0,
        'no-undef': 0,
        'no-unused-vars': 0,
        'camelcase': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
