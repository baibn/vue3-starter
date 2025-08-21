import { computed, ref, watch } from 'vue'
import type { Todo } from '../types/todo'

const STORAGE_KEY = 'vue3-todos'

export function useTodo() {
  const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  /* 状态 */
  const todos = ref<Todo[]>(Array.isArray(raw) ? raw.filter(Boolean) : [])

  /* 过滤 */
  type Filter = 'all' | 'active' | 'completed'
  const filter = ref<Filter>('all')

  const filterOptions: Filter[] = ['all', 'active', 'completed']

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return todos.value.filter((t) => !t.done)
      case 'completed':
        return todos.value.filter((t) => t.done)
      default:
        return todos.value
    }
  })

  /* 增删改 */
  const add = (text: string) =>
    todos.value.unshift({ id: Date.now(), text: text.trim(), done: false })

  const remove = (id: number) =>
    (todos.value = todos.value.filter((t) => t.id !== id))

  const toggle = (id: number) => {
    const t = todos.value.find((t) => t.id === id)
    if (t) t.done = !t.done
  }
  watch(
    todos,
    (val: any) => localStorage.setItem(STORAGE_KEY, JSON.stringify(val)),
    { deep: true }
  )

  const clearCompleted = () =>
    (todos.value = todos.value.filter((t) => !t.done))

  return {
    todos,
    filteredTodos,
    filter,
    filterOptions,
    add,
    remove,
    toggle,
    clearCompleted,
  }
}
