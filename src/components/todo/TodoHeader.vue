<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{ add: [text: string] }>()
const text = ref('')

function submit() {
  const t = text.value.trim()
  if (t) {
    emit('add', t)
    text.value = ''
  }
}
</script>

<template>
  <header class="header">
    <input
      v-model="text"
      placeholder="What needs to be done?"
      @keyup.enter="submit"
    />
  </header>
</template>

<style scoped>
.header {
  padding: 12px;
}
.header input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}
</style>
