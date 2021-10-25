<script>
  export let label = '';
  export let checked = false;
  let clazz;
  export { clazz as class };
</script>

<div class={`checkbox ${clazz || ''}`}>
  <label>
    <input type="checkbox" on:change bind:checked />
    {label}
  </label>
</div>

<style lang="scss">
  .checkbox {
    font-size: 1.4rem;
    label {
      cursor: pointer;
    }
  }
</style>
