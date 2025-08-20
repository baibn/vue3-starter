<script setup lang="ts">
type Filter = 'all' | 'active' | 'completed'

interface Props {
  left: number
  completedCount: number
  filter: Filter
}
interface Emits {
  (e: 'setFilter', f: Filter): void
  (e: 'clear'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]
</script>

<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ left }}</strong> item{{ left !== 1 ? 's' : '' }} left
    </span>
    <ul class="filters">
      <li v-for="f in filters" :key="f.value">
        <a
          href="#"
          :class="{ selected: filter === f.value }"
          @click.prevent="emit('setFilter', f.value)"
        >
          {{ f.label }}
        </a>
      </li>
    </ul>
    <button
      v-if="completedCount"
      class="clear-completed"
      @click="emit('clear')"
    >
      Clear completed
    </button>
  </footer>
</template>
