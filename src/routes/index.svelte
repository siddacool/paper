<script context="module">
  export const prerender = true;
  import Paper from '~/components/Paper.svelte';
</script>

<svelte:head>
  <title>Paper</title>
</svelte:head>

<section>yo <Paper /></section>

<style lang="scss">
  :global(.paper-made) {
    height: 300px;
    width: 300px;
  }
</style>
