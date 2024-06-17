<script setup lang="ts">
import { offset, useFloating, flip, autoUpdate } from "@floating-ui/vue";
import { onClickOutside } from "@vueuse/core";
import LanguageIcon from "~icons/ph/translate";

const switchLocalePath = useSwitchLocalePath();

const languageButton = ref<HTMLElement>();
const languageSelect = ref<HTMLElement>();
const showLanguageSelect = ref(false);

const { floatingStyles } = useFloating(languageButton, languageSelect, {
  placement: "bottom-start",
  middleware: [offset(5), flip()],
  whileElementsMounted: autoUpdate,
});

onClickOutside(
  languageSelect,
  () => {
    if (!showLanguageSelect.value) return;
    showLanguageSelect.value = false;
  },
  {
    ignore: [languageButton],
  }
);
</script>

<template>
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
    <NuxtLink :to="switchLocalePath('pt')" @click="showLanguageSelect = false"
      >Português</NuxtLink
    >
    <NuxtLink :to="switchLocalePath('en')" @click="showLanguageSelect = false"
      >English</NuxtLink
    >
  </div>
</template>

<style lang="scss" scoped>

.language-select {
  background-color: #35383e;
  border: 2px solid #4c4e54;
  border-radius: 8px;

  a {
    display: block;
    padding: 8px 16px;
  }
}
</style>