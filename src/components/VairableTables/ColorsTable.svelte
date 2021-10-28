<script>
  import { browser } from '$app/env';
  import { onDestroy } from 'svelte';
  import colorVariables from '~/data/color-css-variables';
  import TableVariables from '../TableVariables.svelte';
  import ColorCell from './ColorCell.svelte';
  import ColorCellDark from './ColorCellDark.svelte';
  import theme from '~/store/theme';

  let columns = [
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
  ];

  const title = 'Color Variables';
  const titleDark = `${title} (enable light theme ☀ to see color values)`;

  const unsubscribe = theme.subscribe((value) => {
    if (browser) {
      if (value === 'light') {
        columns = [
          ...columns,
          {
            id: 'color-dark',
            name: '.dark',
            cellComponent: ColorCellDark,
          },
        ];
      } else {
        columns = columns.filter((c) => c.id !== 'color-dark');
      }
    }
  });

  onDestroy(unsubscribe);
</script>

<TableVariables {columns} items={colorVariables} title={$theme === 'dark' ? titleDark : title} />
