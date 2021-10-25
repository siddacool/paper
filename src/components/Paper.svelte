<script>
  import '~/styles/paper/index.scss';
  export let border = false;
  export let hollow = false;
  export let black = false;
  export let radius = '';
  export let elevation = '';
  let clazz;
  export { clazz as class };
</script>

<div
  class={`paper-made ${clazz || ''} ${radius ? `radius-${radius}` : ''} ${
    elevation ? `elevation-${elevation}` : ''
  }`}
  class:border
  class:hollow
  class:black
>
  <slot />
</div>
