<script>
  import colorVariables from '~/data/color-css-variables';
  import TableVariables from '../TableVariables.svelte';
  import ColorCell from './ColorCell.svelte';
  import ColorCellDark from './ColorCellDark.svelte';
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
      id: 'color',
      name: 'color',
      cellComponent: ColorCell,
    },
    {
      id: 'color-dark',
      name: '(dark)',
      cellComponent: ColorCellDark,
    },
  ];
</script>

<TableVariables {columns} items={colorVariables} title="Color Variables" />
