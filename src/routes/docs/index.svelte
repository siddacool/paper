<script context="module">
  export const prerender = true;
</script>

<script>
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';
  const classesList = [];
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

  <p>Following is the example with required class name to make it work 👉</p>

  <DisplayBox {classesList}>
    <Paper class="example" />
  </DisplayBox>
</section>
