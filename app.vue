<script setup lang="ts">
defineOgImageStatic({
  component: "DefaultImage",
});
</script>

<template>
  <div>
    <TheHeader />
    <main>
      <SeoKit />
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>
