<script setup lang="ts">
const route = useRoute();
const tag = route.params.tag as string;

const { locale } = useI18n();

const postList = await getPosts(locale.value, tag);
</script>

<template>
  <h1 class="tag">{{ tag }}</h1>
  <PostList :postList="postList" />
</template>

<style lang="scss" scoped>
.tag {
  font-size: 1.75rem;
  margin-bottom: 2rem;
}
</style>
