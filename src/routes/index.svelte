<script context="module">
  export const prerender = true;
  import Paper from '~/components/Paper.svelte';
</script>

<svelte:head>
  <title>Paper</title>
</svelte:head>

<section>yo <Paper class="example" /> <a href="/docs/">Docs</a></section>

<style lang="scss">
  section {
    :global(.paper-made) {
      height: 300px;
      width: 300px;
    }
  }
</style>
