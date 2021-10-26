<script>
  import colorVariables from '~/data/color-css-variables';
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

<TableVariables {columns} items={colorVariables} title="Color Variables" />
