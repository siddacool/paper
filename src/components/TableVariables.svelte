<script>
  import Paper from './Paper.svelte';

  export let title = '';
  export let columns = [];
  export let items = [];
</script>

<div class="table-variables">
  <Paper border radius="2">
    <div class="title">{title}</div>
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          {#each columns as column}
            <th>{column.name}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each items as item}
          <tr>
            {#each columns as column}
              <td>{item[column.id] ? item[column.id] : ''}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </Paper>
</div>

<style lang="scss">
  .table-variables {
    font-size: var(--paper-site-paragraph-font-size);
    max-width: 60ch;
    margin-bottom: var(--paper-site-space-3);
    :global(.paper-made) {
      overflow: auto;
      position: relative;
      max-height: 400px;
    }

    .title {
      padding: var(--paper-site-space-1);
      font-size: 1rem;
      font-weight: bold;
      background-color: var(--paper-site-display-box-color);
    }

    table {
      table-layout: auto;
      width: 100%;
      min-width: 400px;
      border: none;
    }

    thead {
      position: sticky;
      top: 0;
      left: 0;
      background-color: var(--paper-site-display-box-color);
    }

    th {
      font-size: 1rem;
      text-align: left;
      padding: 6px var(--paper-site-space-1);
    }

    tbody {
      tr {
        &:hover {
          background-color: var(--paper-site-selection-color);
        }
      }
    }

    td {
      font-size: 0.9rem;
      padding: 12px var(--paper-site-space-1);
    }
  }
</style>
