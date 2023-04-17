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
  <header class="header">
    <NuxtLink to="/" class="site-name"
      ><span class="gray-text">Frontend</span> Walrus</NuxtLink
    >
    <div class="right-side">
      <nav>
        <ul class="nav-links">
          <li>
            <NuxtLink to="/posts">Posts</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tags">Tags</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sobre">Sobre</NuxtLink>
          </li>
        </ul>
      </nav>
      <button @click="toggleTheme">
        <component :is="currentTheme == 'light' ? SunIcon : MoonIcon" />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem 3rem;
  font-family: Lato;
}

.site-name {
  font-size: var(--step-2);
}

.right-side {
  display: flex;
  gap: 1em;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}
</style>
