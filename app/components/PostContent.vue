<script setup lang="ts">
import formatDate from "@/utils/formatDate";

defineProps<{
  post: Record<string, any>;
}>();

const { locale } = useI18n();
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
            <BlogLink :to="'/tags/' + tag" class="tag">{{ tag }}</BlogLink>
          </li>
        </ul>
      </div>
    </div>
    <ContentRenderer :value="post" class="article-content" />
    <BlogLink :to="'/'" class="link-backward">{{ $t("back") }}</BlogLink>
  </article>
</template>
