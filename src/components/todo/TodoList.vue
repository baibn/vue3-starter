<script setup lang="ts">
import type { Todo } from '../../types/todo'
import TodoItem from './TodoIterm.vue'

interface Props {
  todos: Todo[]
}
interface Emits {
  (e: 'toggle', id: number): void
  (e: 'remove', id: number): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <ul>
    <TodoItem
      v-for="t in todos.filter(Boolean)"
      :key="t.id"
      :todo="t"
      @toggle="$emit('toggle', $event)"
      @remove="$emit('remove', $event)"
    />
  </ul>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
