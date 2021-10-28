<script>
  export let href = '#';
  export let isActive = false;
  export let external = false;
  export let target = '';
</script>

<a {href} class={isActive ? 'active' : ''} class:external {target}>
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

    &.external {
      &:hover {
        background-color: initial;
        text-decoration: underline;
        color: var(--paper-site-primary-color);
      }

      :global(svg) {
        color: var(--paper-site-primary-color);
        opacity: 1;
        margin: 0;
        margin-left: var(--paper-site-space-1);
      }
    }
  }
</style>
