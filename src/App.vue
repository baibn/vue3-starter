<script setup>
import CounterComponent from './components/CounterComponent.vue'
import EnvTag from './components/EnvTag.vue'
import UserCard from './components/UserCard.vue'
import { capitalize, sum } from './utils/math'
console.log('sum 1~5 =', sum(1, 2, 3, 4, 5))
console.log('capitalize vue =', capitalize('vue'))
</script>
<template>
  <EnvTag />
  <CounterComponent />
  <UserCard />
</template>

<style scoped></style>
