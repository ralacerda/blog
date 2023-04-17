<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="w-full h-full p-8"
    :style="{ backgroundColor: '#1f2229', color: '#ebebeb' }"
  >
    <p :style="{ fontSize: '32px', color: '#79c0ff' }">Frontend Walrus</p>
    <h1 :style="{ fontSize: '70px', marginTop: '12px' }">{{ title }}</h1>
    <p :style="{ fontSize: '32px', marginTop: '8px' }">{{ description }}</p>
  </div>
</template>
