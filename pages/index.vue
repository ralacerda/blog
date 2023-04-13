<script setup lang="ts">
const contentQuery = await queryContent("posts").find();
// console.log(contentQuery);

const colorMode = useColorMode();

function toggleTheme() {
  colorMode.preference = colorMode.preference == "dark" ? "light" : "dark";
}
</script>

<template>
  <NuxtLayout>
    <h1>Hello</h1>
    <ul>
      <button @click="toggleTheme()">change</button>
    </ul>
  </NuxtLayout>
</template>
