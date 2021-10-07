<script>
  import Footer from '~/components/DocsFooter/DocsFooter.svelte';
  import Header from '~/components/DocsHeader/DocsHeader.svelte';
  import Sidebar from '~/components/DocsSidebar/DocsSidebar.svelte';
  import Base from './base.svelte';
</script>

<Base>
  <div class="wrapper">
    <Header />
    <Sidebar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</Base>

<style lang="scss">
  .wrapper {
    @media (min-width: 900px) {
      height: 100vh;
      display: grid;
      grid-template-columns: var(--sidebar-width) auto;
      grid-template-rows: var(--header-height) auto var(--footer-height);
      grid-template-areas:
        'header header'
        'sidebar main'
        'sidebar footer';
    }
  }

  main {
    grid-area: main;
    background-color: beige;
  }
</style>
