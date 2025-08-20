<script setup>
import { ref } from 'vue'
import CounterComponent from './components/CounterComponent.vue'
import EnvTag from './components/EnvTag.vue'
import LifeCycleDemo from './components/LifeCycleDemo.vue'
import TodoList from './components/TodoList.vue'
import UserCard from './components/UserCard.vue'

import ThemeProvider from './components/ThemeProvider.vue'
import DeepChild from './components/DeepChild.vue'

const show = ref(true)
const todos = ref(['vue', 'vite'])
</script>

<template>
  <EnvTag />
  <CounterComponent />
  <UserCard />
  <LifeCycleDemo v-if="show" />
  <TodoList v-model:iterms="todos" />
  <ThemeProvider>
    <DeepChild></DeepChild>
  </ThemeProvider>
</template>

<style scoped></style>
