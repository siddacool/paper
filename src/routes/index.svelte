<script context="module">
  export const prerender = true;
  import Paper from '~/components/Paper.svelte';
  import Home from '~/layouts/Home.svelte';
</script>

<svelte:head>
  <title>Paper</title>
</svelte:head>

<Home><section>yo <Paper /></section></Home>

<style lang="scss">
  :global(.paper-made) {
    height: 300px;
    width: 300px;
  }
</style>
