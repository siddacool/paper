<script context="module">
  export const prerender = true;
</script>

<script>
  import radiusOptions from '~/data/radius-options';
  import Checkbox from '~/components/Checkbox.svelte';
  import DisplayBox from '~/components/DisplayBox.svelte';
  import Paper from '~/components/Paper.svelte';
  import Select from '~/components/Select.svelte';
  import Border from './border.svelte';
  const classesListOg = [];

  let classesList = [];

  const onHollowChange = (e) => {
    if (classesList.includes('hollow')) {
      classesList = classesList.filter((c) => c !== 'hollow');
    } else {
      classesList = [...classesList, 'hollow'];
    }
  };

  const onBorderChange = (e) => {
    if (classesList.includes('border')) {
      classesList = classesList.filter((c) => c !== 'border');
    } else {
      classesList = [...classesList, 'border'];
    }
  };

  let radiusVal = 'radius-1';

  const onRadiusChange = (event) => {
    radiusVal = event.target.value;
  };
</script>

<svelte:head>
  <title>Paper</title>
</svelte:head>

<section>
  <p>
    Paper is one shoes fits all component that can be modified and adpated to make layouts, UI
    compoenents. It's written in scss and uses css variables which can be tinkered as per one's
    needs.
  </p>

  <p>Following is the example with required class name to make it work 👉</p>

  <DisplayBox {classesListOg}>
    <Paper class="example" />
  </DisplayBox>
</section>
