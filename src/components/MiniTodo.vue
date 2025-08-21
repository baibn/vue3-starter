<script setup lang="ts">
import { ref } from 'vue'
import { useTodo } from '../composables/useTodo'

// 按需解构
const {
  filteredTodos,
  filter,
  filterOptions,
  add,
  remove,
  toggle,
  clearCompleted,
} = useTodo()
const input = ref('')

function submit() {
  if (input.value.trim()) {
    add(input.value.trim())
    input.value = ''
  }
}
</script>

<template>
  <input v-model="input" @keyup.enter="submit" placeholder="输入回车添加" />

  <div>
    <button
      v-for="f in filterOptions"
      :key="f"
      :class="{ active: filter === f }"
      @click="filter = f"
    >
      {{ f }}
    </button>
  </div>

  <ul>
    <li v-for="t in filteredTodos" :key="t.id">
      <input type="checkbox" :checked="t.done" @change="toggle(t.id)" />
      <span :class="{ done: t.done }">{{ t.text }}</span>
      <button @click="remove(t.id)">×</button>
    </li>
  </ul>
  <div>
    <button @click="clearCompleted">Clear completed</button>
  </div>
</template>
