import { writable } from 'svelte/store';

function theme() {
  const { subscribe, update } = writable('light');

  return {
    subscribe,
    toggle: () => {
      update((pos) => (pos === 'light' ? 'dark' : 'light'));
    },
    light: () => {
      update(() => 'light');
    },
    dark: () => {
      update(() => 'dark');
    },
  };
}

export default theme();
