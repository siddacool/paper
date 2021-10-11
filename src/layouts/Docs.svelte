<script>
  import Base from './base.svelte';
  import Header from '~/components/DocsHeader/DocsHeader.svelte';
  import Main from '~/components/DocsMain/DocsMain.svelte';
  import Sidebar from '~/components/DocsSidebar/DocsSidebar.svelte';
</script>

<Base>
  <div class="wrapper">
    <Header />
    <Sidebar />
    <Main><slot>Loading...</slot></Main>
  </div>
</Base>

<style lang="scss">
  .wrapper {
    @media (min-width: 900px) {
      height: 100vh;
      display: grid;
      grid-template-columns: var(--sidebar-width) auto;
      grid-template-rows: var(--header-height) auto;
      grid-template-areas:
        'header header'
        'sidebar main';
    }
  }
</style>
