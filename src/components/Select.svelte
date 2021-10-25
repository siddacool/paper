<script>
  export let label = '';
  export let options = [];
  export let value = '';
  let clazz;
  export { clazz as class };
</script>

<div class={`select ${clazz || ''}`}>
  <label>
    {label}
    <select bind:value on:change>
      {#each options as option}
        <option value={option.value}>
          {option.name}
        </option>
      {/each}
    </select>
  </label>
</div>

<style lang="scss">
  .select {
    font-size: 1.4rem;

    select {
      font-size: inherit;
    }
  }
</style>
