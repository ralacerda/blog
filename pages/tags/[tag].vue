<script setup lang="ts">
const route = await useRoute();
const tag = route.params.tag;

const { data } = await useAsyncData(() =>
  queryContent(`/posts/`)
    .where({ tags: { $contains: tag } })
    .only("title")
    .find()
);
</script>

<template>
  <h1 class="tag">{{ tag }}</h1>
  <article v-if="data">
    <p v-for="post in data">{{ post }}</p>
  </article>
  <p v-else>Não conseguimos achar</p>
</template>
