<script setup>
import { provide, ref } from 'vue'
const color = ref('hotpink')
provide('themeColor', color)
</script>

<template>
  <input v-model="color" type="'color'" />>
  <slot />
</template>
