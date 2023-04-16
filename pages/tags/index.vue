<script setup lang="ts">
const { data: tagList } = await useAsyncData("tags", () =>
  queryContent("/").only("tags").find()
);

function getAllTags() {
  const tags = new Set();
  tagList.value?.forEach((document) => {
    if (document.tags) document.tags.forEach((tag: string) => tags.add(tag));
  });
  return tags;
}

const tagSet = Array.from(getAllTags());
</script>

<template>
  <ul>
    <li v-for="tag in tagSet">
      <NuxtLink :to="'tags/' + tag" class="tag">{{ tag }}</NuxtLink>
    </li>
  </ul>
</template>
