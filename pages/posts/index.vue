<script setup lang="ts">
const { data: postList } = await useAsyncData("posts", () =>
  queryContent("/posts").only(["title", "_path"]).find()
);
</script>

<template>
  <h1>Posts</h1>
  <ul>
    <li v-for="post in postList">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>
