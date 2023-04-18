<script setup lang="ts">
const postList = await getPosts();
</script>

<template>
  <h1>Posts</h1>
  <PostList :postList="postList" />
</template>
