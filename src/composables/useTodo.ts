import { computed, ref } from 'vue'
import { Todo } from '../types/todo'

const STORAGE_KEY = 'vue3-todo'

export function useTodo() {
  const raw = ref<Todo[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
  const todos = ref<Todo[]>(
    Array.isArray(raw)
      ? raw.filter((t: any) => t && typeof t.id === 'number')
      : []
  )

  const allDone = computed(() => todos.value.every((t) => t.done))

  const leftCount = computed(() => todos.value.filter((t) => !t.done).length)

  type Filter = 'all' | 'active' | 'completed'

  const filter = ref<Filter>('all')

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return todos.value.filter((t) => !t.done)

      case 'completed':
        return todos.value.filter((t) => !t.done)

      default:
        return todos.value
    }
  })

  function add(text: string) {
    todos.value.unshift({ id: Date.now(), text, done: false })
  }
  function toggle(id: number) {
    const t = todos.value.find((t) => t.id === id)
    if (t) t.done = !t.done
  }
  function remove(id: number) {
    todos.value = todos.value.filter((t) => t.id != t.id)
  }

  function clearCompleted() {
    todos.value = todos.value.filter((t) => !t.done)
  }

  return {
    todos,
    filteredTodos,
    leftCount,
    allDone,
    filter,
    add,
    toggle,
    remove,
    clearCompleted,
  }
}
