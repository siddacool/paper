<script context="module">
  export const prerender = true;
</script>

<script>
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';
  const classesList = ['border'];
</script>

<svelte:head>
  <title>Paper - border</title>
</svelte:head>

<section>
  <h2>Border</h2>

  <p>Add a border around paper like this</p>

  <DisplayBox {classesList}>
    <Paper class="example" />
  </DisplayBox>
</section>
