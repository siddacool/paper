<script context="module">
  export const prerender = true;
</script>

<script>
  import radiusOptions from '~/data/radius-options';
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';
  import Select from '~/components/Select.svelte';

  let radiusVal = 'radius-1';

  const onRadiusChange = (event) => {
    radiusVal = event.target.value;
  };
</script>

<svelte:head>
  <title>Paper - radius</title>
</svelte:head>

<section>
  <h2>Radius</h2>

  <p>Add a radius around paper like this</p>

  <DisplayBox classesList={[radiusVal]}>
    <Paper class="example" radius={`${radiusVal.replace('radius-', '')}`} />
    <div slot="options">
      <Select options={radiusOptions} on:change={onRadiusChange} value={radiusVal} />
    </div>
  </DisplayBox>
</section>
