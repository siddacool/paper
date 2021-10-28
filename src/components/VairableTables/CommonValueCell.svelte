<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';

  export let item = {};
  let borderRadius = '';

  onMount(() => {
    if (browser) {
      const style = getComputedStyle(document.body);
      borderRadius = style.getPropertyValue(item.variable);
    }
  });
</script>

<td class="common-value-cell">{borderRadius}</td>

<style lang="scss">
  .common-value-cell {
    padding: 12px var(--paper-site-space-1);
    font-size: 0.9rem;
    color: var(--paper-site-font-color);
  }
</style>
