<script setup lang="ts">
const route = useRoute();
const tag = route.params.tag as string;

const postList = await getPosts(tag);
</script>

<template>
  <h1 class="tag">{{ tag }}</h1>
  <PostList :postList="postList" />
</template>
