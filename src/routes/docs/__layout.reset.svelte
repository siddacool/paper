<script>
  import '~/styles/app.scss';
  import Modal from 'svelte-simple-modal';
  import Header from '~/components/DocsHeader/DocsHeader.svelte';
  import Main from '~/components/DocsMain/DocsMain.svelte';
  import Sidebar from '~/components/DocsSidebar/DocsSidebar.svelte';
</script>

<div class="wrapper">
  <Header />
  <Sidebar class="sidebar" />
  <Main><slot>Loading...</slot></Main>
  <Modal>
    <Sidebar class="modal-sidebar" />
  </Modal>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
      height: 100vh;
      display: grid;
      grid-template-columns: var(--sidebar-width) auto;
      grid-template-rows: var(--header-height) auto;
      grid-template-areas:
        'header header'
        'sidebar main';
    }

    :global(.sidebar) {
      display: none;

      @media (min-width: 900px) {
        display: block;
      }
    }

    :global(.modal-sidebar) {
      display: block;

      @media (min-width: 900px) {
        display: none;
      }
    }
  }
</style>
