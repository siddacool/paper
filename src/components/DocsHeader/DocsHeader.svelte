<script>
  import Paper from '~/components/Paper.svelte';
  import MenuButton from '~/components/MenuButton.svelte';
  import ThemeToggleSection from '../ThemeToggleSection.svelte';
  import GithubLink from '../GithubLink.svelte';
</script>

<header>
  <Paper class="header-paper">
    <MenuButton />
    <h3>
      <a href="/docs/">Paper.docs</a>
    </h3>

    <div class="right-menu">
      <GithubLink />
      <ThemeToggleSection />
    </div>
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
    z-index: 10;

    @media (min-width: 900px) {
      position: static;
      left: initial;
      bottom: initial;
      width: initial;
    }

    :global(.header-paper) {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 var(--paper-site-space-2);
      border-top: 2px solid var(--paper-site-border-color);
      position: relative;

      @media (min-width: 900px) {
        border-top: none;
        border-bottom: 2px solid var(--paper-site-border-color);
      }
    }

    a {
      color: var(--paper-site-primary-color);
      text-decoration: none;
    }

    :global(.menu) {
      height: 40px;
      margin-right: var(--paper-site-space-2);
      @media (min-width: 900px) {
        display: none;
      }
    }

    .right-menu {
      margin-left: auto;
      display: flex;
      align-items: center;
    }
  }
</style>
