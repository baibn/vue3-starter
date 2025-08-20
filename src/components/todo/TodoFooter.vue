<script setup lang="ts">
type Filter = 'all' | 'active' | 'completed'
interface Props {
  left: number
  completedCount: number
  filter: 'all' | 'active' | 'completed'
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

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  font-size: 14px;
  color: #777;
}
.filters {
  display: flex;
  gap: 6px;
}
.filters a {
  padding: 2px 6px;
  border-radius: 3px;
  text-decoration: none;
  color: inherit;
}
.filters a.selected {
  border: 1px solid #ce4646;
}
.clear-completed {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
}
.clear-completed:hover {
  text-decoration: underline;
}
</style>
