<script>
  import Paper from '~/components/Paper.svelte';
</script>

<header><Paper class="header-paper"><h3><a href="/docs/">Paper.docs</a></h3></Paper></header>

<style lang="scss">
  header {
    height: var(--header-height);
    grid-area: header;

    :global(.header-paper) {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 var(--paper-site-space-2);
      border-bottom: 2px solid var(--paper-site-border-color);
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
</style>
