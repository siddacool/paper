<script>
  import { onDestroy } from 'svelte';
  import { browser } from '$app/env';
  import theme from '~/store/theme';

  let bodyTag = null;
  let faviconTag = null;

  if (browser) {
    bodyTag = document.querySelector('body');
    faviconTag = document.querySelector('link[rel="icon"]');
  }

  const unsubscribe = theme.subscribe((value) => {
    if (browser) {
      if (value === 'dark') {
        bodyTag.classList.add('dark');
        faviconTag.href = '/favicon-dark.svg';
      } else {
        bodyTag.classList.remove('dark');
        faviconTag.href = '/favicon.svg';
      }
    }
  });

  onDestroy(unsubscribe);
</script>
