<script setup lang="ts">
const { locale } = useI18n();

useSeoMeta({
  title: () => (locale.value == "en" ? "About" : "Sobre"),
});
</script>

<template>
  <article>
    <ContentDoc />
  </article>
</template>

<style lang="scss" scoped>
article :deep(p + p) {
  margin-top: 1em;
}
</style>
