<script>
  export let href = '#';
  export let isActive = false;
</script>

<a {href} class={isActive ? 'active' : ''}>
  <slot />
</a>

<style lang="scss">
  a {
    display: flex;
    padding: var(--paper-site-space-1);
    padding-left: var(--paper-site-space-2);
    color: inherit;
    text-decoration: none;

    &:hover {
      background-color: var(--paper-site-selection-color);
    }

    &.active {
      font-weight: 600;
      color: var(--paper-site-primary-color);
    }
  }
</style>
