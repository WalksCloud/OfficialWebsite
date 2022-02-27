module.exports = {
  root: false,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  // 'plugin:nuxt/recommended',
  // '@nuxtjs',
  // '@vue/prettier',
  // 'standard',
  // 'plugin:prettier/recommended',
  // 'prettier',
  // "eslint:recommended",
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
}
