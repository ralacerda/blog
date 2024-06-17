<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <header class="header">
    <nav>
      <ul class="nav-links">
        <li>
          <NuxtLink :to="localePath('/')">{{ $t("home") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('tags')">Tags</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('about')">{{ $t("about") }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="nav-buttons">
      <ThemeButton />
      <LanguageButton />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.nav-buttons {
  display: flex;
}
</style>
