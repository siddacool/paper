<script context="module">
  export const prerender = true;
</script>

<script>
  import colorOptions from '~/data/color-options';
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Checkbox from '~/components/Checkbox.svelte';
  import Paper from '~/components/Paper.svelte';
  import Select from '~/components/Select.svelte';
  let classesList = [];

  let colorVal = 'color-primary';

  const onColorValChange = (event) => {
    colorVal = event.target.value;
  };

  const onBorderChange = (e) => {
    if (classesList.includes('border')) {
      classesList = classesList.filter((c) => c !== 'border');
    } else {
      classesList = [...classesList, 'border'];
    }
  };
</script>

<svelte:head>
  <title>Paper - color</title>
</svelte:head>

<section>
  <h2>Color</h2>

  <p>Paper comes built-in with theme colors</p>

  <DisplayBox classesList={[...classesList, colorVal]}>
    <Paper
      class="example"
      color={`${colorVal.replace('color-', '')}`}
      border={classesList.includes('border')}
    >
      TEXT FOR CONTRAST TEST
    </Paper>
    <div slot="options">
      <Checkbox
        label="border"
        on:change={onBorderChange}
        checked={classesList.includes('border')}
      />

      <Select options={colorOptions} on:change={onColorValChange} value={colorVal} />
    </div>
  </DisplayBox>
</section>
