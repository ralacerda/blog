<script setup lang="ts">
const postList = await getPosts(undefined, 5);
</script>

<template>
  <h1 class="sr-only">Frontend Walrus</h1>
  <article>
    <PostList :postList="postList" />
  </article>
  <NuxtLink to="/posts" class="link-forward">See all posts</NuxtLink>
</template>
