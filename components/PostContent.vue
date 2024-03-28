<script setup lang="ts">
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
    <NuxtLink to="/posts" class="link-backward">All posts</NuxtLink>
  </article>
</template>
