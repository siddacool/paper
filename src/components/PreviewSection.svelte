<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import Paper from './Paper.svelte';
  import radiusVariables from '~/data/radius-css-variables';
  import colorVariables from '~/data/color-css-variables';
  import PreviewColorCard from './PreviewColorCard.svelte';
  export let dark = false;

  let style = '';

  onMount(() => {
    if (browser) {
      style = getComputedStyle(document.body);
    }
  });
</script>

<article class:dark>
  <div class="section">
    <Paper radius="2">default</Paper>
    <Paper black radius="2">black</Paper>
  </div>
  <div class="section">
    <Paper border radius="2">border</Paper>
    <Paper hollow border radius="2">hollow</Paper>
  </div>
  <div class="section">
    {#each radiusVariables as radiusVariable}
      <Paper radius={radiusVariable.name.replace('radius-', '')} class="flex-col">
        <div>{radiusVariable.name}</div>
        <div class="value">
          {style && style.getPropertyValue && style.getPropertyValue(radiusVariable.variable)}
        </div>
      </Paper>
    {/each}
  </div>
  <div class="section">
    {#each { length: 24 } as _, i}
      <Paper elevation={`${i + 1}`} radius="2">
        elevation-{i + 1}
      </Paper>
    {/each}
  </div>
  <div class="section">
    <Paper radius="2" elevation="1">default</Paper>
    <Paper radius="2" elevation="1" black>black</Paper>
    {#each colorVariables as colorVariable}
      {#if colorVariable.name.includes('bg') && !colorVariable.name.includes('bg-default')}
        <PreviewColorCard {colorVariable} />
      {/if}
    {/each}
  </div>
  <div class="section">
    <Paper radius="2" border>default</Paper>
    <Paper radius="2" border black>black</Paper>
    {#each colorVariables as colorVariable}
      {#if colorVariable.name.includes('bg') && !colorVariable.name.includes('bg-default')}
        <PreviewColorCard {colorVariable} border />
      {/if}
    {/each}
  </div>
</article>

<style lang="scss">
  article {
    --paper-color-bg-default: #fff;
    flex: 1;
    background-color: var(--paper-site-display-box-color);
    color: var(--paper-site-font-color);
    padding: var(--paper-site-space-2);
    font-size: 1rem;

    @media (min-width: 900px) {
      height: 100%;
      min-height: 100vh;
      font-size: 1.2rem;
    }

    .section {
      margin-bottom: var(--paper-site-space-6);
      display: flex;
      flex-wrap: wrap;
    }

    :global(.paper-made) {
      width: 140px;
      height: 140px;
      margin-right: var(--paper-site-space-2);
      margin-bottom: var(--paper-site-space-2);
      padding: var(--paper-site-space-1);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      @media (min-width: 900px) {
        width: 200px;
        height: 200px;
        margin-right: var(--paper-site-space-4);
        margin-bottom: var(--paper-site-space-4);
      }
    }

    :global(.flex-col) {
      flex-direction: column;
    }

    :global(.paper-made .value) {
      font-size: 0.9rem;
      margin-top: var(--paper-site-space-1);

      @media (min-width: 900px) {
        font-size: 1rem;
      }
    }
  }
</style>
