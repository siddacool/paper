<script>
  import '~/styles/app.scss';
  import ThemeSetter from '~/components/ThemeSetter.svelte';
  import Paper from '~/components/Paper.svelte';
  import TheHeader from '~/components/TheHeader.svelte';
</script>

<ThemeSetter />
<TheHeader />
<main>
  <Paper class="home-main-paper">
    <slot>Loading...</slot>
  </Paper>
</main>

<style lang="scss">
  :global(.home-main-paper) {
    padding-top: 90px;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
