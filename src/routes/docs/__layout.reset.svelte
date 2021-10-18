<script>
  import '~/styles/app.scss';
  import Header from '~/components/DocsHeader/DocsHeader.svelte';
  import Main from '~/components/DocsMain/DocsMain.svelte';
  import Sidebar from '~/components/DocsSidebar/DocsSidebar.svelte';
  import Modal from '~/components/Modal.svelte';
  import openSidebar from '~/store/openSidebar';

  const onModalClose = () => {
    openSidebar.hide();
  };
</script>

<div class="wrapper">
  <Header />
  <Sidebar class="sidebar" />
  <Main><slot>Loading...</slot></Main>
  <Modal open={$openSidebar} class="modal-for-sidebar" on:close={onModalClose}>
    <div class="modal-holder">
      <div class="modal-content">
        <Sidebar class="content" />
      </div>
    </div>
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

    :global(.modal-for-sidebar) {
      @media (min-width: 900px) {
        display: none;
      }
    }
    .modal-holder {
      position: relative;
      left: 0;
      top: 0;
    }

    .modal-content {
      position: absolute;
      left: 0;
      top: 0;
      height: 100vh;
      width: 200px;
    }

    :global(.content) {
      height: 100%;
      width: 100%;
    }

    :global(.content .sidebar-ul) {
      align-self: flex-end;
      padding-bottom: 60px;
    }

    :global(.content .sidebar-ul a) {
      height: 50px;
      align-items: center;
    }
  }
</style>
