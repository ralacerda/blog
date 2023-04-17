<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";

const route = await useRoute();

const { data } = await useAsyncData(() =>
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
  title: () => data.value?.title,
  description: () => data.value?.description,
});
</script>

<template>
  <article v-if="data">
    <div class="article-info">
      <h1>
        {{ data.title }}
      </h1>
      <div>
        <time :datetime="data.publishDate">{{ formattedDate }}</time>
        <ul class="article-tags">
          <li v-for="tag in data.tags">
            <NuxtLink :href="'/tags/' + tag" class="tag">{{ tag }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <ContentRenderer :value="data" class="article-content" />
    <NuxtLink to="/posts" class="link-backward">Ver outras posts</NuxtLink>
  </article>
  <p v-else>Não conseguimos achar</p>
</template>
