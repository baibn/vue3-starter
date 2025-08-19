<script setup>
import { ref } from 'vue'

const props = defineProps({ iterms: Array })
const emit = defineEmits(['update:iterms'])

const newTodo = ref('')

function submit() {
  if (newTodo.value.trim()) {
    console.log(newTodo.value.trim())
    emit('update:iterms', [...props.iterms, newTodo.value.trim()])
    newTodo.value = ''
  }
}
</script>

<template>
  <ul>
    <li v-for="(iterm, i) in iterms" :key="i">
      {{ iterm }}
    </li>
  </ul>
  <input
    v-model="newTodo"
    placeholder="输入--回车--添加"
    @keyup.enter="submit"
  />
</template>
