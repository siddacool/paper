<script>
  import '~/styles/app.scss';
  import ThemeSetter from '~/components/ThemeSetter.svelte';
  import Paper from '~/components/Paper.svelte';
</script>

<ThemeSetter />
<main>
  <Paper class="home-main-paper">
    <slot>Loading...</slot>
  </Paper>
</main>

<style lang="scss">
  :global(.home-main-paper) {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
