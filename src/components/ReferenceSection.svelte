<script>
  export let list = [];
</script>

<div class="reference-section">
  <div>References:</div>

  <ul>
    {#each list as { href, title }}
      <li>
        <a {href} target="_blank">
          {title}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .reference-section {
    font-size: clamp(1.1rem, 1.2vw, 1.3rem);
    ul {
      margin-top: 0;
    }

    li {
      margin-bottom: var(--paper-site-space-1);
    }
  }
</style>
