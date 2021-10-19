<script context="module">
  export const prerender = true;
</script>

<script>
  import Checkbox from '~/components/Checkbox.svelte';
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';
  let classesList = ['border', 'hollow'];

  const onHollowChange = (e) => {
    if (classesList.includes('hollow')) {
      classesList = classesList.filter((c) => c !== 'hollow');
    } else {
      classesList = [...classesList, 'hollow'];
    }
  };
</script>

<svelte:head>
  <title>Paper - border</title>
</svelte:head>

<section>
  <h2>Border</h2>

  <p>Add a border around paper like this</p>

  <DisplayBox {classesList}>
    <Paper class="example" border hollow={classesList.includes('hollow')} />

    <div slot="options">
      <Checkbox
        label="hollow"
        on:change={onHollowChange}
        checked={classesList.includes('hollow')}
      />
    </div>
  </DisplayBox>
</section>
