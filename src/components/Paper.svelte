<script>
  import '~/styles/paper/index.scss';
  export let border = false;
  export let hollow = false;
  export let radius = '';
  let clazz;
  export { clazz as class };
</script>

<div
  class={`paper-made ${clazz || ''} ${radius ? `radius-${radius}` : ''} `}
  class:border
  class:hollow
>
  <slot />
</div>
