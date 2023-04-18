<script setup lang="ts">
const route = useRoute();
const tag = route.params.tag as string;
</script>

<template>
  <h1 class="tag">{{ tag }}</h1>
  <PostList :tag="tag" />
</template>
