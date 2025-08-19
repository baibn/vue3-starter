<script setup>
import { onBeforeMount,onMounted,onBeforeUnmount } from 'vue';
console.log('setup')

onBeforeMount(()=>console.log('beforeMount'))
onMounted(()=>console.log('mount'))
onBeforeUnmount(()=>console.log('beforeUnmout'))
</script>

<template>控制台输出</template>