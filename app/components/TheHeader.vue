<template>
  <header class="header">
    <nav>
      <ul class="nav-links">
        <li>
          <BlogLink to="/">{{ $t("home") }}</BlogLink>
        </li>
        <li>
          <BlogLink to="tags">Tags</BlogLink>
        </li>
        <li>
          <BlogLink to="demos">Demos</BlogLink>
        </li>
        <li>
          <BlogLink to="about">{{ $t("about") }}</BlogLink>
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
