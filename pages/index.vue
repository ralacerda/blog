<script setup lang="ts">
const postList = await getPosts(undefined, 5);
</script>

<template>
  <h1 class="sr-only">Renato Lacerda Blog</h1>
  <article>
    <PostList :postList="postList" />
  </article>
</template>
