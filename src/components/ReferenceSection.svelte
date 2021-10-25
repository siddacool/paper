<script>
  export let list = [];
</script>

<div class="reference-section">
  <p>References:</p>

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
    ul {
      padding-left: 18px;
      margin-top: 0;
    }

    p {
      margin-bottom: 0;
    }
  }
</style>
