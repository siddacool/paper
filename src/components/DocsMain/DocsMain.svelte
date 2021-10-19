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

    :global(.main-paper) {
      display: flex;
      padding: var(--paper-site-space-3) var(--paper-site-space-2);
      width: 100%;
      overflow-y: auto;
      padding-bottom: 100px;

      @media (min-width: 900px) {
        height: 100%;
        padding-left: var(--paper-site-space-3);
        padding-right: var(--paper-site-space-3);
        height: calc(100vh - var(--header-height));
      }
    }
  }
</style>
