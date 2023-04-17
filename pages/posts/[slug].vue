<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";

const route = await useRoute();

const { data: post } = await useAsyncData(() =>
  queryContent(`/posts/${route.params.slug}`).findOne()
);

const formattedDate = useDateFormat(
  new Date(Date.now()),
  "DD [de] MMMM [de] YYYY",
  {
    locales: "pt-BR",
  }
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
        <time :datetime="post.publishDate">{{ formattedDate }}</time>
        <ul class="article-tags">
          <li v-for="tag in post.tags">
            <NuxtLink :href="'/tags/' + tag" class="tag">{{ tag }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <PostContent :value="post" />
    <NuxtLink to="/posts" class="link-backward">Ver outras posts</NuxtLink>
  </article>
  <p v-else>Não conseguimos achar</p>
</template>
