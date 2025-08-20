<!-- src/components/DeepChild.vue -->
<script setup>
import { inject } from 'vue'

const color = inject('themeColor') // 拿到祖先提供的 ref
// 如想加默认值： inject('themeColor', '#000')
</script>

<template>
  <p :style="{ color }">我是深层子组件，主题色实时同步：{{ color }}</p>
</template>
