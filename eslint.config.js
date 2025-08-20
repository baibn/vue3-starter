// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default [
  // ESLint 推荐规则
  js.configs.recommended,

  // 把 Vue 官方插件的规则集加进来
  ...pluginVue.configs['flat/recommended'],

  // 你自己的覆盖
  {
    files: ['**/*.{js,,ts,mjs,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser, // 处理 <script setup lang="ts">
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.browser, // 关键：把 console、window 等浏览器全局变量加进来
      },
      plugins: {
        '@typescript-eslint': ts,
      },
      rules: {
        ...ts.configs.recommended.rules,
      },
    },
  },
]
