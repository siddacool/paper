<script>
  import Paper from './Paper.svelte';
  import ThemeToggleSection from './ThemeToggleSection.svelte';
</script>

<header>
  <Paper class="main-header-paper">
    <ThemeToggleSection />
  </Paper>
</header>

<style lang="scss">
  header {
    height: var(--header-height);
    grid-area: header;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;

    @media (min-width: 900px) {
      bottom: initial;
      top: 0;
    }

    :global(.main-header-paper) {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 var(--paper-site-space-2);
      border-top: 2px solid transparent;

      @media (min-width: 900px) {
        border-top: none;
        border-bottom: 2px solid transparent;
      }
    }
  }
</style>
