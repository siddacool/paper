<script>
  import Paper from '~/components/Paper.svelte';
</script>

<div class="page-not-found">
  <Paper class="page-not-found-paper">
    <section>
      <h2>You are lost</h2>
      <p><a href="/">👈 Get back to Paper</a></p>
    </section>
  </Paper>
</div>

<style lang="scss">
  :global(.page-not-found-paper) {
    display: flex;
    width: 100vw;
    height: 100vh;
    padding: var(--paper-site-space-2);
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section {
    position: relative;
    top: -20vh;
  }

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
