<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { data: postList } = await useAsyncData("posts", () =>
  queryContent("/posts")
    .where({ draft: false })
    .only([
      "title",
      "tags",
      "publishDate",
      "shortDescription",
      "_path",
      "draft",
    ])
    .find()
);
</script>

<template>
  <h1>Posts</h1>
  <PostList :postList="postList" />
</template>
