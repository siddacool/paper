<script context="module">
  export const prerender = true;
</script>

<script>
  import radiusOptions from '~/data/radius-options';
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';
  import Select from '~/components/Select.svelte';
  import RadiusTable from '~/components/VairableTables/RadiusTable.svelte';

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
  <p>Rounded corners can be added as follows. The roundness can be further customized.</p>

  <DisplayBox classesList={[radiusVal]}>
    <Paper class="example" radius={`${radiusVal.replace('radius-', '')}`} />
    <div slot="options">
      <Select options={radiusOptions} on:change={onRadiusChange} value={radiusVal} />
    </div>
  </DisplayBox>

  <h3>Circle</h3>
  <p>Paper can be made circuler using <code>radius-circle</code>.</p>

  <DisplayBox classesList={['radius-circle']}>
    <Paper class="example" radius="circle" />
  </DisplayBox>

  <h3>css variables</h3>
  <RadiusTable />
</section>
