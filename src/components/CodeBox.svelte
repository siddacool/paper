<article class="code-box">
  <code><slot /></code>
</article>

<style lang="scss">
  .code-box {
    font-size: clamp(1.2rem, 1.6vw, 1.6rem);

    code {
      background-color: var(--paper-site-display-box-color);
      padding: var(--paper-site-space-1);
      border-radius: 4px;
      color: var(--paper-site-primary-color);
    }
  }
</style>
