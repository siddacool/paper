<script>
  import ElevationColorVariables from '~/data/elevation-color-css-variables';
  import TableVariables from '../TableVariables.svelte';
  import CommonValueCell from './CommonValueCell.svelte';
  const columns = [
    {
      id: 'name',
      name: 'Name',
    },
    {
      id: 'variable',
      name: 'css-variable',
    },
    {
      id: 'value',
      name: 'value',
      cellComponent: CommonValueCell,
    },
  ];
</script>

<TableVariables {columns} items={ElevationColorVariables} title="Elevation color Variables" />
