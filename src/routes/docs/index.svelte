<script context="module">
  export const prerender = true;
</script>

<script>
  import CodeBox from '~/components/CodeBox.svelte';
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';
</script>

<svelte:head>
  <title>Paper</title>
</svelte:head>

<section>
  <p>Get started</p>
  <CodeBox>npm i @papermade/core</CodeBox>

  <p>import css in your project</p>
  <CodeBox>import '@papermade/core/styles.css';</CodeBox>

  <p>and initiate Paper as shown in the example below 👉</p>

  <DisplayBox>
    <Paper class="example" />
  </DisplayBox>
</section>
