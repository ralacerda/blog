<script setup lang="ts">
import SunIcon from "~icons/ph/sun";
import MoonIcon from "~icons/ph/moon";

const colorMode = useColorMode();

function toggleTheme() {
  colorMode.preference = colorMode.value == "light" ? "dark" : "light";
}

const currentTheme = computed(() => colorMode.value);
</script>

<template>
  <button @click="toggleTheme" aria-label="Change theme">
    <component :is="currentTheme == 'light' ? SunIcon : MoonIcon" />
  </button>
</template>
