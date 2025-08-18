// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'

export default [
  // ESLint 推荐规则
  js.configs.recommended,

  // 把 Vue 官方插件的规则集加进来
  ...pluginVue.configs['flat/recommended'],

  // 你自己的覆盖
  {
    files: ['**/*.{js,mjs,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser, // 关键：把 console、window 等浏览器全局变量加进来
      },
    },
  },
]
