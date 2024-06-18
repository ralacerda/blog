<script setup lang="ts">
import formatDate from "@/utils/formatDate";
const { locale } = useI18n();

defineProps<{
  post: Record<string, any>;
}>();
</script>

<template>
  <article>
    <div class="article-info">
      <h1>
        {{ post.title }}
      </h1>
      <div>
        <time :datetime="post.publishDate">{{
          formatDate(post.publishDate, locale)
        }}</time>
        <ul class="article-tags">
          <li v-for="tag in post.tags">
            <NuxtLink :href="'/tags/' + tag" class="tag">{{ tag }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <ContentRenderer :value="post" class="article-content" />
    <NuxtLink to="/" class="link-backward">{{ $t("back") }}</NuxtLink>
  </article>
</template>
