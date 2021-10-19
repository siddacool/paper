<script>
  import Paper from './Paper.svelte';
  export let classesList = [];
</script>

<article class="display-box">
  <Paper class="display-box-paper">
    <div><slot /></div>
    <div>
      <div class="options"><slot name="options" /></div>
      <pre>
        <code>
        &lt;div class="<b>paper-made {classesList.join(' ')}</b>"&gt;&lt;/div&gt;
       </code>
     </pre>
    </div>
  </Paper>
</article>

<style lang="scss">
  .display-box {
    width: 100%;
    min-height: 300px;
    font-size: clamp(1.2rem, 1.6vw, 1.6rem);
    display: flex;

    @media (min-width: 900px) {
      max-width: 60ch;
    }

    b {
      color: var(--paper-site-primary-color);
    }
  }

  :global(.display-box-paper) {
    width: 100%;
    padding: var(--paper-site-space-2);

    @media (min-width: 900px) {
      display: flex;
    }
  }

  :global(.display-box-paper > div) {
    flex: 1;
  }
</style>
