<script>
  import sidebarNav from './sidebar-nav';
</script>

<aside>
  <ul>
    {#each sidebarNav as { name, path }}
      <li>
        <a href={`/docs/${path}`}>
          {name}
        </a>
      </li>
    {/each}
  </ul>
</aside>

<style lang="scss">
  aside {
    grid-area: sidebar;
    display: none;
    background-color: blueviolet;

    @media (min-width: 900px) {
      display: block;
    }
  }
</style>
