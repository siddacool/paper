<script>
  import '~/styles/app.scss';
  import ThemeSetter from '~/components/ThemeSetter.svelte';
  import TheHeader from '~/components/TheHeader.svelte';
</script>

<ThemeSetter />
<TheHeader />
<main>
  <slot>Loading...</slot>
</main>

<style lang="scss">
  main {
    padding-top: 90px;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--paper-color-bg-default);
  }
</style>
