<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import theme from '~/store/theme';
  import { RGBToHex } from '~/helpers/color-converters';

  export let item = {};
  export let isDark = false;

  let element;
  let bgColor = '';

  onMount(() => {
    if (browser) {
      const style = window.getComputedStyle(element, '');
      bgColor = style.getPropertyValue('background-color');
    }
  });
</script>

<td class={`color-cell ${isDark ? 'dark' : ''}`} width="150">
  <div class="holder">
    <div class="cell" style={`background-color: var(${item.variable})`} bind:this={element} />
    {#if $theme === 'light'}
      <div class="bg-color">{bgColor}</div>
    {/if}
  </div>
</td>

<style lang="scss">
  .color-cell {
    text-align: center;
    background-color: var(--paper-site-display-box-color);
    border-bottom: 2px solid var(--paper-site-border-color);

    .holder {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 12px var(--paper-site-space-1);
      flex-direction: column;
    }

    .cell {
      width: 60px;
      height: 40px;
      border-radius: 4px;
    }

    .bg-color {
      font-size: 0.9rem;
      color: var(--paper-site-font-color);
      margin-top: 5px;
    }
  }
</style>
