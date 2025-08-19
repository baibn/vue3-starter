<script setup>
import { computed, reactive, ref } from 'vue'

const user = reactive({
  firstName: 'Evan',
  lastName: 'You',
  age: 38,
})

//计算属性
const fullName = computed(() => `${user.firstName} ${user.lastName}`)

function birthday() {
  user.age++
}

const ageRef = ref(user.age)
</script>

<template>
  <div class="Card">
    <h3>{{ fullName }}</h3>
    <p>Age:{{ user.age }}</p>
    <p>refAge:{{ ageRef }}</p>
    <button @click="birthday">Happy Birthday</button>
  </div>
</template>
<style scoped>
.Card {
  border: 1px solid #ccc;
  padding: 12px;
  width: 220px;
}
</style>
