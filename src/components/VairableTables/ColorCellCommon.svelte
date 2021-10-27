<script>
  export let item = {};
  export let isDark = false;
</script>

<td class={`color-cell ${isDark ? 'dark' : ''}`} width="150">
  <div class="holder">
    <div class="cell" style={`background-color: var(${item.variable})`} />
  </div>
</td>

<style lang="scss">
  .color-cell {
    text-align: center;
    background-color: var(--paper-site-display-box-color);
    border-bottom: 2px solid var(--paper-site-border-color);

    .holder {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 12px var(--paper-site-space-1);
    }

    .cell {
      width: 60px;
      height: 40px;
      border-radius: 4px;
    }
  }
</style>
