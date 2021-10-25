<script>
  export let classesList = [];
</script>

<article class="display-box">
  <div class="preview"><slot /></div>
  <div class="code-box">
    <div class="options">
      <slot name="options" />
    </div>
    <pre>
      <code>
      &lt;div class="<b>paper-made {classesList.join(' ')}</b>"&gt;&lt;/div&gt;
     </code>
   </pre>
  </div>
</article>

<style lang="scss">
  .display-box {
    width: 100%;
    min-height: 300px;
    font-size: clamp(1.2rem, 1.6vw, 1.6rem);
    display: flex;
    padding: var(--paper-site-space-2);
    background-color: var(--paper-site-display-box-color);

    @media (min-width: 900px) {
      max-width: 60ch;
    }

    b {
      color: var(--paper-site-primary-color);
    }

    code {
      white-space: break-spaces;
      font-size: clamp(1.2rem, 1.5vw, 1.5rem);
    }

    .preview {
      flex: 1;
      @media (min-width: 900px) {
        max-width: 340px;
      }
    }

    .code-box {
      flex: 1;
      padding-top: var(--paper-site-space-2);

      @media (min-width: 900px) {
        padding: 0;
      }
    }
  }
</style>
