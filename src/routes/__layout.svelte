<script>
  import '~/styles/app.scss';
  import ThemeSetter from '~/components/ThemeSetter.svelte';
</script>

<ThemeSetter />
<main>
  <slot>Loading...</slot>
</main>

<style lang="scss">
  main {
    padding-top: 30px;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--paper-site-display-box-color);

    @media (min-width: 900px) {
      padding-top: 90px;
    }
  }
</style>
