<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

const { data: post } = await useAsyncData(`post-${slug}`, () => {
  return queryContent(`/posts/${slug}`).findOne();
});

defineOgImageStatic({
  component: "PostImage",
});

useSeoMeta({
  title: post.value?.title,
  description: () => post.value?.description,
});
</script>

<template>
  <PostContent v-if="post" :post="post" />
</template>
