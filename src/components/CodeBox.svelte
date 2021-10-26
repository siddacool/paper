<article class="code-box">
  <code><slot /></code>
</article>

<style lang="scss">
  .code-box {
    font-size: var(--paper-site-paragraph-font-size);

    code {
      background-color: var(--paper-site-display-box-color);
      padding: var(--paper-site-space-1);
      border-radius: 4px;
      color: var(--paper-site-primary-color);
    }
  }
</style>
