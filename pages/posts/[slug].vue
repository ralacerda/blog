<script setup lang="ts">
const route = await useRoute();

const { data: post } = await useAsyncData(() =>
  queryContent(`/posts/${route.params.slug}`).findOne()
);

defineOgImageStatic({
  component: "PostImage",
});

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,
});
</script>

<template>
  <PostContent :post="post" />
</template>
