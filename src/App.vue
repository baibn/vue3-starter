<script setup>
import { ref } from 'vue'

import MiniTodo from './components/MiniTodo.vue'
</script>

<template>
  <!-- <EnvTag />
  <CounterComponent />
  <UserCard />
  <LifeCycleDemo v-if="show" /> -->
  <!-- <TodoList v-model:iterms="todos" /> -->
  <!-- <ThemeProvider>
    <DeepChild></DeepChild>
  </ThemeProvider> -->
  <MiniTodo />
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 40px;
}
</style>
