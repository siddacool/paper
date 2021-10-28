<script context="module">
  import PreviewSection from '~/components/PreviewSection.svelte';

  export const prerender = true;
</script>

<svelte:head>
  <title>Paper - preview</title>
</svelte:head>

<section>
  <PreviewSection />
  <PreviewSection dark />
</section>

<style lang="scss">
  section {
    @media (min-width: 900px) {
      display: flex;
      min-height: 100vh;
      overflow: auto;
    }
  }
</style>
