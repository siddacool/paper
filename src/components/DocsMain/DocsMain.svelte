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
      height: 100%;
      padding: var(--paper-site-space-3) 0;
      border-right: 2px solid var(--paper-site-border-color);
    }
  }
</style>
