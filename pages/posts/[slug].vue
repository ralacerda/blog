<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;
const { locale } = useI18n();

const { data: post } = await useAsyncData(`post-${slug}`, () => {
  return queryContent(`/posts/${locale.value}/${slug}`).findOne();
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogType: "article",
});

defineOgImageComponent("BlogPost", {
  title: post.value?.title,
  description: post.value?.description,
});
</script>

<template>
  <PostContent v-if="post" :post="post" />
</template>
