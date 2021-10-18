<script>
  const dispatch = createEventDispatcher();
  import { createEventDispatcher } from 'svelte';
  export let open = false;
  let clazz;
  export { clazz as class };

  function onModalCloseInternal() {
    dispatch('close');
  }
</script>

{#if open}
  <div class={`modal ${clazz || ''}`}>
    <div class="backdrop-holder" on:click={onModalCloseInternal}>
      <div class="backdrop" />
    </div>
    <slot />
  </div>
{/if}

<style lang="scss">
  .modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .backdrop {
    position: relative;
  }

  .backdrop {
    background-color: rgb(0 0 0 / 80%);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  :global(.content) {
    position: relative;
    z-index: 2;
  }
</style>
