<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import Paper from './Paper.svelte';
  import { rgbToHex } from '~/helpers/color-converters';
  export let colorVariable = {};
  export let border = false;
  let element;
  let bgColor = '';

  onMount(() => {
    if (browser) {
      const paperElm = element.querySelector('.paper-made')
        ? element.querySelector('.paper-made')
        : '';
      const style = window.getComputedStyle(paperElm, '');
      bgColor = style.getPropertyValue('background-color');

      bgColor = rgbToHex(bgColor);
    }
  });
</script>

<div bind:this={element}>
  <Paper
    color={colorVariable.name.replace('bg-', '')}
    class="flex-col"
    radius="2"
    elevation={border ? '0' : '1'}
    {border}
  >
    <div>{colorVariable.name}</div>
    <div class="value">
      <div class="bg-color">{bgColor}</div>
    </div>
  </Paper>
</div>
