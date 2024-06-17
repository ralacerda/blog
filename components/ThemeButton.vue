<script setup lang="ts">
const colorMode = useColorMode();

function toggleTheme() {
  colorMode.preference = colorMode.value == "light" ? "dark" : "light";
}
</script>

<template>
  <button @click="toggleTheme" aria-label="Change theme">
    <Icon
      :name="colorMode.preference == 'dark' ? 'ph:moon' : 'ph:sun'"
      size="20px"
    />
  </button>
</template>

<style lang="scss" scoped>
button {
  display: grid;
  place-items: center;
}
</style>
