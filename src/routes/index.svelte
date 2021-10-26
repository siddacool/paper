<script context="module">
  export const prerender = true;
  import CodeBox from '~/components/CodeBox.svelte';
  import Paper from '~/components/Paper.svelte';
  import ThemeToggleSection from '~/components/ThemeToggleSection.svelte';
</script>

<svelte:head>
  <title>Paper</title>
</svelte:head>

<section>
  <Paper elevation="2" radius="2">
    <ThemeToggleSection />
    <h1>Paper</h1>
    <p>
      One shoe fits all component written in <b>SCSS</b> and uses <b>CSS variables</b> that can be tinkered
      as per one's needs.
    </p>

    <p>Get started</p>

    <CodeBox>npm i @papermade/core</CodeBox>

    <div class="next-steps"><p><a href="/docs/">Next Steps →</a></p></div>
  </Paper>
</section>

<style lang="scss">
  section {
    :global(.paper-made) {
      width: clamp(300px, 60vw, 600px);
      padding: var(--paper-site-space-3);
      margin-left: auto;
      margin-right: auto;
      position: relative;
    }

    :global(.theme-toggle-btn) {
      position: absolute;
      top: var(--paper-site-space-3);
      right: var(--paper-site-space-3);
      height: initial;
    }

    .next-steps {
      text-align: right;
    }

    :global(code) {
      display: block;
    }
  }
</style>
