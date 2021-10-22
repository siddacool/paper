<script context="module">
  export const prerender = true;
</script>

<script>
  import elevationOptions from '~/data/elevation-options';
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';
  import Select from '~/components/Select.svelte';

  let elevationVal = 'elevation-1';

  const onElevationValChange = (event) => {
    elevationVal = event.detail;
  };
</script>

<svelte:head>
  <title>Paper - elevation</title>
</svelte:head>

<section>
  <h2>Elevation</h2>

  <p>Add a elevation to paper like this</p>

  <DisplayBox classesList={[elevationVal]}>
    <Paper class="example" elevation={`${elevationVal.replace('elevation-', '')}`} />
    <div slot="options">
      <Select options={elevationOptions} on:change={onElevationValChange} value={elevationVal} />
    </div>
  </DisplayBox>
</section>
