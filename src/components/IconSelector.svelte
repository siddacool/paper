<script>
  export let icon;
  export let solidIcon = true;
  export let size = '20';
  let clazz = '';
  export { clazz as class };

  import {
    ChevronRight,
    Menu,
    Moon,
    Sun,
    ArrowLeft,
    ArrowNarrowRight,
    Download,
  } from 'svelte-hero-icons';
  import Icon from 'svelte-hero-icons/Icon.svelte';
</script>

{#if icon === 'chevron-right'}
  <Icon src={ChevronRight} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'menu'}
  <Icon src={Menu} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'moon'}
  <Icon src={Moon} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'sun'}
  <Icon src={Sun} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'arrow-left'}
  <Icon src={ArrowLeft} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'arrow-narrow-right'}
  <Icon src={ArrowNarrowRight} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'download'}
  <Icon src={Download} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}
