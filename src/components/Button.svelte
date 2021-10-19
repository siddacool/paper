<script>
  import { createEventDispatcher } from 'svelte';

  import Paper from '~/components/Paper.svelte';
  const dispatch = createEventDispatcher();

  let clazz;
  export { clazz as class };

  function sayHello() {
    dispatch('click', {
      text: 'Hello!',
    });
  }
</script>

<button class={`button ${clazz || ''}`} on:click>
  <Paper class="button-paper"><slot /></Paper>
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
  }

  :global(.button-paper) {
    padding: 4px 6px;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
