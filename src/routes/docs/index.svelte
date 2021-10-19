<script context="module">
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';

  export const prerender = true;
</script>

<svelte:head>
  <title>Paper</title>
</svelte:head>

<section>
  <p>
    Paper is one shoes fits all component that can be modified and adpated to make layouts, UI
    compoenents. It's written in scss and uses css variables which can be tinkered as per one's
    needs.
  </p>

  <DisplayBox>
    <Paper class="example" />
  </DisplayBox>
</section>
