<script>
  import Paper from '~/components/Paper.svelte';
</script>

<main>
  <Paper class="main-paper">
    <slot>Loading...</slot>
  </Paper>
</main>

<style lang="scss">
  main {
    grid-area: main;
    height: 100vh;
    overflow-y: auto;

    @media (min-width: 900px) {
      height: calc(100vh - var(--header-height));
    }

    :global(.main-paper) {
      display: flex;
      padding: var(--paper-site-space-3) var(--paper-site-space-2);
      width: 100%;
      padding-bottom: 100px;
      min-height: 100%;

      @media (min-width: 900px) {
        padding-left: var(--paper-site-space-3);
        padding-right: var(--paper-site-space-3);
      }
    }
  }
</style>
