<script setup lang="ts">
import { ref } from 'vue'
import type { Todo } from '../../types/todo'

interface Props {
  todo: Todo
}
interface Emits {
  (e: 'toggle', id: number): void
  (e: 'remove', id: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const editing = ref(false)
const editText = ref('')

function startEdit() {
  editing.value = true
  editText.value = props.todo.text
}
function saveEdit() {
  if (editText.value.trim()) props.todo.text = editText.value.trim()
  editing.value = false
}
function cancelEdit() {
  editing.value = false
}
</script>

<template>
  <li :class="{ completed: todo.done, editing }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="emit('toggle', todo.id)"
      />
      <label @dblclick="startEdit">{{ todo.text }}</label>
      <button class="destroy" @click="emit('remove', todo.id)"></button>
    </div>
    <input
      v-if="editing"
      v-model="editText"
      class="edit"
      @keyup.enter="saveEdit"
      @blur="saveEdit"
      @keyup.esc="cancelEdit"
    />
  </li>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
.completed label {
  text-decoration: line-through;
  color: #999;
}
button.destroy {
  margin-left: auto;
  background: none;
  border: none;
  color: #cc9a9a;
  cursor: pointer;
}
button.destroy:hover {
  color: #af5b5e;
}
.edit {
  width: 100%;
  padding: 4px;
}
</style>
