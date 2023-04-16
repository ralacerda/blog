<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { data: postList } = await useAsyncData("posts", () =>
  queryContent("/posts")
    .only(["title", "tags", "publishDate", "shortDescription", "_path"])
    .find()
);
</script>

<template>
  <h1>Posts</h1>
  <PostList :postList="postList" />
</template>
