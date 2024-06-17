<script setup lang="ts">
import SunIcon from "~icons/ph/sun";
import MoonIcon from "~icons/ph/moon";
import LanguageIcon from "~icons/ph/translate";
import { offset, useFloating } from "@floating-ui/vue";
import { onClickOutside } from "@vueuse/core";

const colorMode = useColorMode();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const languageButton = ref<HTMLElement>();
const languageSelect = ref<HTMLElement>();
const showLanguageSelect = ref(false);

const { floatingStyles } = useFloating(languageButton, languageSelect, {
  placement: "bottom",
  middleware: [offset(5)],
});

onClickOutside(languageSelect, () => {
  if (!showLanguageSelect.value) return;
  showLanguageSelect.value = false;
});

function toggleTheme() {
  colorMode.preference = colorMode.value == "light" ? "dark" : "light";
}

function changeLocale(locale: "pt" | "en") {
  return switchLocalePath(locale);
}

const currentTheme = computed(() => colorMode.value);
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
    <div>
      <button @click="toggleTheme" aria-label="Change theme">
        <component :is="currentTheme == 'light' ? SunIcon : MoonIcon" />
      </button>
      <button
        @click="showLanguageSelect = !showLanguageSelect"
        ref="languageButton"
        aria-label="Change Language"
      >
        <LanguageIcon />
      </button>
      <div
        v-show="showLanguageSelect"
        ref="languageSelect"
        :style="floatingStyles"
        class="language-select"
      >
        <NuxtLink
          :to="switchLocalePath('pt')"
          @click="showLanguageSelect = false"
          >Português</NuxtLink
        >
        <NuxtLink
          :to="switchLocalePath('en')"
          @click="showLanguageSelect = false"
          >English</NuxtLink
        >
      </div>
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

.language-select {
  background-color: #35383e;
  border: 2px solid #4c4e54;
  border-radius: 8px;
  padding: 4px 8px;

  a {
    display: block;
    padding: 4px;
  }
}
</style>
