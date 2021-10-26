<script>
  import ElevationColorVariables from '~/data/elevation-color-css-variables';
  import TableVariables from '../TableVariables.svelte';
  const columns = [
    {
      id: 'name',
      name: 'Name',
    },
    {
      id: 'variable',
      name: 'css-variable',
    },
  ];
</script>

<TableVariables {columns} items={ElevationColorVariables} title="Elevation color Variables" />
