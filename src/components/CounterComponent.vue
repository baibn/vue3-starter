<script setup>
import { computed, ref } from 'vue'
const count = ref(0)
const double = computed(() => count.value * 2)

function inc() {
  count.value++
}
function dec() {
  count.value--
}
function reset() {
  count.value = 0
}
</script>

<template>
  <div class="counter">
    <button @click="dec">➖</button>
    <span>{{ count }}</span>

    <button @click="inc">➕</button>
    <button @click="reset">Reset</button>
    <p>Double:{{ double }}</p>
    <div style="color: red">
      {{ Date.now() }}
    </div>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  gap: 16px;
  align-items: center;
}
button {
  width: 80px;
  height: 80px;
}
</style>
