<script setup lang="ts">
import formatDate from "@/utils/formatDate";

defineProps<{
  post: Record<string, any>;
}>();

const { locale } = useI18n();
const localePath = useLocalePath();
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
            <NuxtLink :to="localePath('/tags/' + tag)" class="tag">{{
              tag
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <ContentRenderer :value="post" class="article-content" />
    <NuxtLink :to="localePath('/')" class="link-backward">{{
      $t("back")
    }}</NuxtLink>
  </article>
</template>
