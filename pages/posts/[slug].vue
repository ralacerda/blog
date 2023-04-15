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
</script>

<template>
  <template v-if="data">
    <div class="article-info">
      <h2>
        {{ data.title }}
      </h2>
      <div>{{ formattedDate }}</div>
    </div>
    <ContentRenderer :value="data" class="article-content" />
  </template>
  <p v-else>Não conseguimos achar</p>
</template>
