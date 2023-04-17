<template>
  <h1>Frontend Walrus</h1>
  <article>
    <PostList :limit="5" />
  </article>
  <NuxtLink to="/posts" class="link-forward">Todos os posts</NuxtLink>
</template>
