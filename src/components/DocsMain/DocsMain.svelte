<main>
  <slot>Loading...</slot>
</main>

<style lang="scss">
  main {
    grid-area: main;
    height: 100vh;
    overflow-y: auto;
    display: block;
    padding: var(--paper-site-space-3) var(--paper-site-space-2);
    padding-bottom: 100px;
    background-color: var(--paper-color-bg-default);

    @media (min-width: 900px) {
      height: calc(100vh - var(--header-height));
      padding-left: var(--paper-site-space-3);
      padding-right: var(--paper-site-space-3);
    }
  }
</style>
