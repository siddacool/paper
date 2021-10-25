<script context="module">
  export const prerender = true;
</script>

<script>
  import elevationOptions from '~/data/elevation-options';
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';
  import Select from '~/components/Select.svelte';
  import Checkbox from '~/components/Checkbox.svelte';
  import ReferenceSection from '~/components/ReferenceSection.svelte';
  const referencesList = [
    {
      title: 'material design elevation',
      href: 'https://material-components.github.io/material-components-web-catalog/#/component/elevation',
    },
    {
      title: 'mui - Paper',
      href: 'https://mui.com/components/paper/#main-content',
    },
  ];
  let classesList = [];

  let elevationVal = 'elevation-1';

  const onElevationValChange = (event) => {
    elevationVal = event.target.value;
  };

  const onDarkChange = (e) => {
    if (classesList.includes('black')) {
      classesList = classesList.filter((c) => c !== 'black');
    } else {
      classesList = [...classesList, 'black'];
    }
  };
</script>

<svelte:head>
  <title>Paper - elevation</title>
</svelte:head>

<section>
  <h2>Elevation</h2>

  <p>
    Paper supports Elevation (box shadows) based on
    <a
      href="https://material-components.github.io/material-components-web-catalog/#/component/elevation"
      target="_blank"
    >
      material design elevation
    </a>.
  </p>

  <DisplayBox classesList={[elevationVal, ...classesList]}>
    <Paper
      class="example"
      elevation={`${elevationVal.replace('elevation-', '')}`}
      black={classesList.includes('black')}
    />
    <div slot="options">
      <Checkbox
        label="black (dark theme)"
        on:change={onDarkChange}
        checked={classesList.includes('black')}
      />
      <Select options={elevationOptions} on:change={onElevationValChange} value={elevationVal} />
    </div>
  </DisplayBox>

  <ReferenceSection list={referencesList} />
</section>
