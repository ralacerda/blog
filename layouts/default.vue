<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <h1>
        <NuxtLink to="/"
          ><span class="gray-text">Frontend</span> Walrus</NuxtLink
        >
      </h1>
      <nav>
        <ul>
          <li>
            <NuxtLink to="#">Posts</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Tags</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Sobre</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <slot />
      </article>
    </main>
    <footer>
      <hr />
      <p>Renato Lacerda · 2023</p>
      <ul>
        <li><a href="#">Linkedin</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Mastodon</a></li>
        <li><a href="#">CodePen</a></li>
      </ul>
    </footer>
  </div>
</template>
