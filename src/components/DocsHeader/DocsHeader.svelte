<script>
  import Paper from '~/components/Paper.svelte';
</script>

<header><Paper class="header-paper">Paper docs</Paper></header>

<style lang="scss">
  header {
    height: var(--header-height);
    grid-area: header;
    background-color: #91ccff;

    :global(.header-paper) {
      display: flex;
      height: 100%;
      align-items: center;
      background-color: inherit;
    }
  }
</style>
