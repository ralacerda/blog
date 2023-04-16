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
            <NuxtLink to="#">Sobre</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
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
