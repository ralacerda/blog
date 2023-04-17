<script setup lang="ts">
const { data: postList } = await useAsyncData(() =>
  queryContent(`/posts/`)
    .where({ draft: false })
    .only(["title", "tags", "publishDate", "shortDescription", "_path"])
    .limit(5)
    .find()
);

const formattedDate = useDateFormat(
  new Date(Date.now()),
  "DD [de] MMMM [de] YYYY",
  {
    locales: "pt-BR",
  }
);
</script>

<template>
  <ul class="post-list">
    <li v-for="post in postList">
      <NuxtLink :to="post._path"
        ><h2>{{ post.title }}</h2>
      </NuxtLink>
      <time :datetime="post.publishDate">{{ formattedDate }}</time>
      <ul class="tag-list">
        <li v-for="tag in post.tags">
          <NuxtLink class="tag" :to="'/tags/' + tag">{{ tag }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "assets/styles/utils/mixins";

.post-list {
  list-style: none;
  @include flow(0.4em);
}

.tag-list {
  list-style: none;
  display: flex;
  gap: 1rem;
}
</style>
