<script>
  import '~/styles/paper/index.scss';
  let clazz;
  export { clazz as class };
</script>

<div class={`paper-made ${clazz || ''}`}><slot /></div>
