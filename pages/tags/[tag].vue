<script setup lang="ts">
const route = useRoute();
const tag = route.params.tag;

const { data: postList } = await useAsyncData(() =>
  queryContent(`/posts/`)
    .where({ tags: { $contains: tag } })
    .only(["title", "tags", "publishDate", "shortDescription", "_path"])
    .find()
);
</script>

<template>
  <h1 class="tag">{{ tag }}</h1>
  <article v-if="postList">
    <PostList :postList="postList" />
  </article>
  <p v-else>Não conseguimos achar</p>
</template>
