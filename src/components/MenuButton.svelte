<script>
  import openSidebar from '~/store/openSidebar';
  import Button from '~/components/Button.svelte';
  import IconSelector from '~/components/IconSelector.svelte';

  let clazz;
  export { clazz as class };

  const onSetSidebar = () => {
    openSidebar.toggle();
  };
</script>

<Button on:click={onSetSidebar} class={`menu-btn ${clazz || ''}`}>
  <IconSelector icon="menu" />
</Button>

<style lang="scss">
  :global(.menu-btn) {
    margin-right: var(--paper-site-space-2);
    @media (min-width: 900px) {
      display: none;
    }
  }
</style>
