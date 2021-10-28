<script>
  import radiusVariables from '~/data/radius-css-variables';
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

<TableVariables {columns} items={radiusVariables} title="Radius Variables" />
