<script setup lang="ts">
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="w-full h-full relative"
    :style="{ backgroundColor: '#1f2229', color: '#ebebeb' }"
  >
    <div
      class="flex absolute bottom-0 right-[-90%]"
      :style="{
        width: '200%',
        height: '200%',
        backgroundImage: `radial-gradient(circle, #252930 35%, #0f1114 100%)`,
      }"
    />
    <div class="p-8">
      <p :style="{ fontSize: '32px', color: '#79c0ff' }">Renato Lacerda · Blog</p>
      <h1 :style="{ fontSize: '70px', marginTop: '14px' }">{{ title }}</h1>
      <p :style="{ fontSize: '32px', marginTop: '12px' }">{{ description }}</p>
    </div>
  </div>
</template>
