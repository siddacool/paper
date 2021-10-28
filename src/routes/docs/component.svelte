<script context="module">
  export const prerender = true;
</script>

<script>
  import Button from '~/components/Button.svelte';
  import IconSelector from '~/components/IconSelector.svelte';
  import Paper from '~/components/Paper.svelte';
  import downloadFile from '~/helpers/download-file';
</script>

<svelte:head>
  <title>Paper - component</title>
</svelte:head>

<section>
  <p>Download components</p>

  <Button on:click={() => downloadFile('/download/Paper.svelte')} class="download">
    <Paper border radius="2">
      Download svelte component <IconSelector icon="download" size="25" />
    </Paper>
  </Button>
</section>

<style lang="scss">
  section {
    :global(.download svg) {
      margin-left: 10px;
    }

    :global(.download .paper-made) {
      padding: var(--paper-site-space-1);
      font-size: 1.2rem;
      display: flex;
      align-items: center;

      &:hover {
        --paper-color-bg-default: var(--paper-site-selection-color);
      }
    }
  }
</style>
