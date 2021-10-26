<script>
  import Button from '~/components/Button.svelte';
  import IconSelector from '~/components/IconSelector.svelte';
  import theme from '~/store/theme';

  const onToggleTheme = () => {
    theme.toggle();
  };
</script>

<div class="theme-toggle-section" />

<Button on:click={onToggleTheme} class="theme-toggle-btn">
  {#if $theme === 'light'}
    <IconSelector icon="moon" />
  {:else}
    <IconSelector icon="sun" size="24" />
  {/if}
</Button>

<style lang="scss">
  :global(.theme-toggle-btn) {
    color: var(--paper-site-primary-color);
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>
