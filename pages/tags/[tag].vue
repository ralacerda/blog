<script setup lang="ts">
const route = useRoute();
const tag = route.params.tag;
</script>

<template>
  <h1 class="tag">{{ tag }}</h1>
  <PostList :tag="tag" />
</template>
