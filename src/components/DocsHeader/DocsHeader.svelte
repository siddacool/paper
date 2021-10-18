<script>
  import Paper from '~/components/Paper.svelte';
  import MenuButton from '~/components/MenuButton.svelte';
</script>

<header>
  <Paper class="header-paper">
    <MenuButton />
    <h3>
      <a href="/docs/">Paper.docs</a>
    </h3>
  </Paper>
</header>

<style lang="scss">
  header {
    height: var(--header-height);
    grid-area: header;
    order: 2;

    :global(.header-paper) {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 var(--paper-site-space-2);
      border-top: 2px solid var(--paper-site-border-color);

      @media (min-width: 900px) {
        border-top: none;
        border-bottom: 2px solid var(--paper-site-border-color);
      }
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    :global(.menu) {
      height: 40px;
      margin-right: var(--paper-site-space-2);
      @media (min-width: 900px) {
        display: none;
      }
    }
  }
</style>
