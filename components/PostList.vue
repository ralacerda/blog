<script setup lang="ts">
defineProps<{
  postList: any;
}>();

const localePath = useLocalePath();

function removeLocaleFromPath(path: string) {
  return path.replace(/\/[a-z]{2}\//, "/");
}
</script>

<template>
  <ul class="post-list">
    <li v-for="post in postList">
      <NuxtLink :to="localePath(removeLocaleFromPath(post._path))"
        ><h2>{{ post.title }}</h2>
      </NuxtLink>
      <time :datetime="post.publishDate">{{
        getFormattedDate(post.publishDate)
      }}</time>
      <p>{{ post.description }}</p>
      <ul class="tag-list">
        <li v-for="tag in post.tags">
          <NuxtLink class="tag" :to="'/tags/' + tag">{{ tag }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
time {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}
</style>
