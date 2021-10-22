<script>
  import { createEventDispatcher } from 'svelte';
  export let label = '';
  export let options = [];
  export let value = '';
  let clazz;
  export { clazz as class };

  const dispatch = createEventDispatcher();

  const forward = (event) => {
    const findOpt = options.find((o) => o.name === event.target.value)
      ? options.find((o) => o.name === event.target.value).value
      : '';

    dispatch('change', findOpt);
  };
</script>

<div class={`select ${clazz || ''}`}>
  <label>
    {label}
    <select on:change={(e) => forward(e)}>
      {#each options as { val, name }}
        <option {val} selected={val === value}>{name}</option>
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
