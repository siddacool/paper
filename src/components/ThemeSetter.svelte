<script>
  import { onDestroy } from 'svelte';
  import { browser } from '$app/env';
  import theme from '~/store/theme';

  let bodyTag = null;

  if (browser) {
    bodyTag = document.querySelector('body');
  }

  const unsubscribe = theme.subscribe((value) => {
    if (browser) {
      if (value === 'dark') {
        bodyTag.classList.add('dark');
      } else {
        bodyTag.classList.remove('dark');
      }
    }
  });

  onDestroy(unsubscribe);
</script>
