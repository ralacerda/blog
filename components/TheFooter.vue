<template>
  <footer>
    <hr />
    <p>Renato Lacerda · 2024</p>
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
</template>

<style lang="scss">
footer {
  font-size: var(--step-0);
  text-align: center;

  hr {
    margin-bottom: 0.5rem;
    border: none;
    height: 1px;
    opacity: 0.4;
    background: linear-gradient(
      to right,
      transparent 25%,
      var(--blue),
      transparent 75%
    );
  }

  & ul {
    margin-top: 0.2rem;
    display: flex;
    gap: 0.1rem 1rem;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
  }
}

footer :any-link {
  color: var(--blue);

  &:hover {
    text-decoration: underline;
  }
}
</style>
