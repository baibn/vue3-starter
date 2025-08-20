<script setup>
import { ref } from 'vue'
// import TodoList from './components/TodoList.vue'

import TodoFooter from '@/components/todo/TodoFooter.vue'
import TodoHeader from '@/components/todo/TodoHeader.vue'
import TodoList from '@/components/todo/TodoList.vue'
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
  <section class="todoapp">
    <TodoHeader @add="todo.add" />
    <TodoList
      :todos="todo.filteredTodos.value"
      @toggle="todo.toggle"
      @remove="todo.remove"
    />
    <TodoFooter
      :left="todo.leftCount"
      :completed-count="todo.completedCount"
      :filter="todo.filter"
      @set-filter="todo.filter = $event"
      @clear="todo.clearCompleted"
    />
  </section>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 40px;
}
.todoapp {
  background: #fff;
  max-width: 500px;
  margin: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
