import { ref, computed, watch } from 'vue'
import type { Todo } from '../types/todo'

const STORAGE_KEY = 'vue3-todos'

export function useTodo() {
  // 1. 读缓存，同时过滤脏数据
  const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  const todos = ref<Todo[]>(
    Array.isArray(raw)
      ? raw.filter((r: any) => r && typeof r.id === 'number')
      : []
  )

  // 2. 派生状态
  const leftCount = computed(() => todos.value.filter((t) => !t.done).length)
  const completedCount = computed(() => todos.value.length - leftCount.value)

  // 3. 过滤
  type Filter = 'all' | 'active' | 'completed'
  const filter = ref<Filter>('all')
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

  // 4. actions
  const add = (text: string) =>
    todos.value.unshift({ id: Date.now(), text: text.trim(), done: false })
  const toggle = (id: number) => {
    const t = todos.value.find((t) => t.id === id)
    if (t) t.done = !t.done
  }
  const remove = (id: number) =>
    (todos.value = todos.value.filter((t) => t.id !== id))
  const clearCompleted = () =>
    (todos.value = todos.value.filter((t) => !t.done))

  // 5. 持久化
  watch(
    todos,
    (val) => localStorage.setItem(STORAGE_KEY, JSON.stringify(val)),
    { deep: true }
  )

  // 6. 返回
  return {
    todos,
    filteredTodos,
    leftCount,
    completedCount,
    filter,
    add,
    toggle,
    remove,
    clearCompleted,
  }
}
