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
  <article v-if="post">
    <div class="article-info">
      <h1>
        {{ post.title }}
      </h1>
      <div>
        <time :datetime="post.publishDate">{{
          getFormattedDate(post.publishDate)
        }}</time>
        <ul class="article-tags">
          <li v-for="tag in post.tags">
            <NuxtLink :href="'/tags/' + tag" class="tag">{{ tag }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <ContentRenderer :value="post" class="article-content" />
    <NuxtLink to="/posts" class="link-backward">Ver outras posts</NuxtLink>
  </article>
  <p v-else>Não conseguimos achar</p>
</template>
