<script>
  import { page } from '$app/stores';
  import sidebarNav from './sidebar-nav';
  import Paper from '~/components/Paper.svelte';
  import DecoratedLink from '~/components/DecoratedLink.svelte';
  import IconSelector from '~/components/IconSelector.svelte';
  let clazz;
  export { clazz as class };
</script>

<aside class={`aside ${clazz || ''}`}>
  <Paper class="sidebar-paper">
    <ul class="sidebar-ul">
      {#each sidebarNav as { name, path, icon }}
        <li>
          {#if path === ''}
            <DecoratedLink href={`/docs/${path}`} isActive={$page.path === '/docs' ? true : false}>
              {name}

              {#if $page.path === '/docs' ? true : false}
                <IconSelector icon="chevron-right" class="active-icon" />
              {/if}
            </DecoratedLink>
          {:else}
            <DecoratedLink
              href={`/docs/${path}`}
              isActive={$page.path.includes(`/docs/${path}`) ? true : false}
            >
              {name}

              {#if $page.path.includes(`/docs/${path}`) ? true : false}
                <IconSelector icon="chevron-right" class="active-icon" />
              {/if}
            </DecoratedLink>
          {/if}
        </li>
      {/each}
    </ul>
  </Paper>
</aside>

<style lang="scss">
  aside {
    grid-area: sidebar;

    :global(.sidebar-paper) {
      display: flex;
      height: 100%;
      padding: var(--paper-site-space-3) 0;
      border-right: 2px solid var(--paper-site-border-color);
    }
  }

  ul {
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  li {
    display: block;
    padding: 0;

    :global(svg) {
      margin-right: var(--paper-site-space-1);
      position: relative;
      top: 2px;
      opacity: 0.9;
    }

    :global(.active-icon) {
      margin-right: 0;
      margin-left: auto;
      position: relative;
      top: 4px;
      right: var(--paper-site-space-1);
      opacity: 1;
    }
  }
</style>
