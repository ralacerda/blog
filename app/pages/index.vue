<script setup lang="ts">
const { locale } = useI18n();
const postList = await getPosts(locale.value, undefined, 5);

useSeoMeta({
  title: () => (locale.value == "en" ? "Home" : "Início"),
});
</script>

<template>
  <h1 class="sr-only">Renato Lacerda Blog</h1>
  <article>
    <PostList :postList="postList" />
  </article>
</template>
