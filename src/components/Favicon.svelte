<script>
  import { onDestroy } from 'svelte';
  import { browser } from '$app/env';
  import theme from '~/store/theme';

  let faviconTag = null;

  if (browser) {
    faviconTag = document.querySelector('link[rel="icon"]');
  }

  const unsubscribe = theme.subscribe((value) => {
    if (browser) {
      const faviconTag = document.querySelector('link[rel="icon"]');

      if (value === 'dark') {
        faviconTag.href = '/favicon-dark.svg';
      } else {
        faviconTag.href = '/favicon.svg';
      }

      console.log(faviconTag);
    }
  });

  onDestroy(unsubscribe);
</script>
