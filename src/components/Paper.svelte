<script>
  import '~/styles/paper/index.scss';
  export let border = false;
  export let hollow = false;
  let clazz;
  export { clazz as class };
</script>

<div class={`paper-made ${clazz || ''}`} class:border class:hollow>
  <slot />
</div>
