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
    <nav>
      <ul class="nav-links">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/tags">Tags</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
    <button @click="toggleTheme" aria-label="Change theme">
      <component :is="currentTheme == 'light' ? SunIcon : MoonIcon" />
    </button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem 3rem;
  font-family: inherit;

  a {
    padding: 12px;
  }
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

  li a {
    padding: 12px;
  }
}
</style>
