<script setup lang="ts">
defineProps<{
  value: Record<string, any>;
}>();
</script>

<template>
  <ContentRenderer :value="value" class="article-content" />
</template>
