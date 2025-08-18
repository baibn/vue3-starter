<script setup>
const env = import.meta.env.MODE
</script>

<template>
  <div
    style="
      position: fixed;
      top: 10px;
      left: 10px;
      font-weight: bold;
      color: #000;
    "
  >
    {{ env.toUpperCase() }}
  </div>
</template>
