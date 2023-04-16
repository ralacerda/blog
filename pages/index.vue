<script setup lang="ts">
const { data: posts } = await useAsyncData(() =>
  queryContent(`/posts/`)
    .only(["title", "tags", "publishDate", "shortDescription", "_path"])
    .limit(5)
    .find()
);
</script>

<template>
  <h1>Frontend Walrus</h1>
  <article v-if="posts">
    <PostList :postList="posts" />
  </article>
  <p v-else>Não conseguimos achar</p>
  <NuxtLink to="/posts">Todos os posts</NuxtLink>
</template>
