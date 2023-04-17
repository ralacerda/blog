<script setup lang="ts">
const props = defineProps<{
  tag?: string | string[];
  limit?: number;
}>();

const { data: postList } = await useAsyncData(() => {
  const query = queryContent(`/posts/`).only([
    "title",
    "tags",
    "publishDate",
    "shortDescription",
    "_path",
  ]);

  if (process.env.NODE_ENV !== "development") {
    query.where({ draft: false });
  }

  if (props.tag) {
    query.where({ tags: { $contains: props.tag } });
  }

  if (props.limit) {
    query.limit(5);
  }

  return query.find();
});

const formattedDate = useDateFormat(
  new Date(Date.now()),
  "DD [de] MMMM [de] YYYY",
  {
    locales: "pt-BR",
  }
);
</script>

<template>
  <ul class="post-list">
    <li v-for="post in postList">
      <NuxtLink :to="post._path"
        ><h2>{{ post.title }}</h2>
      </NuxtLink>
      <time :datetime="post.publishDate">{{ formattedDate }}</time>
      <ul class="tag-list">
        <li v-for="tag in post.tags">
          <NuxtLink class="tag" :to="'/tags/' + tag">{{ tag }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>
