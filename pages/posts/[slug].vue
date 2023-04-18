<script setup lang="ts">
const route = await useRoute();
const slug = route.params.slug;

const { data: post } = await useAsyncData(`post-${slug}`, () =>
  queryContent(`/posts/${slug}`).findOne()
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
