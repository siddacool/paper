<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let clazz;
  export { clazz as class };
</script>

<button class={`button ${clazz || ''}`} on:click>
  <slot />
</button>

<style lang="scss">
  :global(.button) {
    background: transparent;
    outline: none;
    border: none;
    font-size: 1rem;
    padding: 0;
    margin: 0;
    color: inherit;
    padding: 4px 6px;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
