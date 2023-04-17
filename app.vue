<script setup lang="ts">
defineOgImageStatic({
  component: "DefaultImage",
});
</script>

<template>
  <div>
    <header>
      <NuxtLink to="/" class="site-name"
        ><span class="gray-text">Frontend</span> Walrus</NuxtLink
      >
      <nav>
        <ul>
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
    </header>
    <main>
      <SeoKit />
      <NuxtPage />
    </main>
    <footer>
      <hr />
      <p>Renato Lacerda · 2023</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/renato-ac-lacerda">Linkedin</a>
        </li>
        <li><a href="https://github.com/ralacerda">GitHub</a></li>
        <li><a href="https://twitter.com/renatoaclacerda">Twitter</a></li>
        <li><a href="https://hachyderm.io/@renato">Mastodon</a></li>
        <li><a href="https://codepen.io/ralacerda">CodePen</a></li>
      </ul>
    </footer>
  </div>
</template>
