<script>
  export let icon;
  export let solidIcon = true;
  export let size = '20';
  let clazz = '';
  export { clazz as class };

  import {
    Home,
    ChevronDoubleUp,
    ColorSwatch,
    MenuAlt4,
    PaperClip,
    ChevronRight,
    Menu,
  } from 'svelte-hero-icons';
  import Icon from 'svelte-hero-icons/Icon.svelte';
</script>

{#if icon === 'home'}
  <Icon src={Home} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'chevron-double-up'}
  <Icon src={ChevronDoubleUp} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'color-swatch'}
  <Icon src={ColorSwatch} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'menu-alt4'}
  <Icon src={MenuAlt4} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'paper-clip'}
  <Icon src={PaperClip} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'chevron-right'}
  <Icon src={ChevronRight} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}

{#if icon === 'menu'}
  <Icon src={Menu} {size} solid={solidIcon} class={`icon ${clazz || ''}`} />
{/if}
