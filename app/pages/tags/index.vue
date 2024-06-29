<script setup lang="ts">
const { data: tagList } = await useAsyncData("tags", () =>
  queryContent("/").where({ draft: false }).only("tags").find()
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
  <h1>Tags</h1>
  <ul class="tag-list">
    <li v-for="tag in tagSet">
      <BlogLink :to="'/tags/' + tag" class="tag">{{ tag }}</BlogLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.tag-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
}

.tag-list .tag {
  font-size: var(--step-2);
}
</style>
