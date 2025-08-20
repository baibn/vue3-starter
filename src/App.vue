<script setup>
import { ref } from 'vue'
// import TodoList from './components/TodoList.vue'
import { useTodo } from '@/composables/useTodo'
const todo = useTodo()

const show = ref(true)
// const todos = ref(['vue', 'vite'])
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
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 40px;
}
</style>
