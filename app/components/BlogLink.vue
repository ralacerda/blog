<script setup lang="ts">
type Props = {
  to: string;
  localize?: boolean;
};

withDefaults(defineProps<Props>(), {
  localize: true,
});

const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localize ? localePath(to) : to">
    <slot />
  </NuxtLink>
</template>
