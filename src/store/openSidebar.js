import { writable } from 'svelte/store';

function openSidebar() {
  const { subscribe, update } = writable(false);

  return {
    subscribe,
    toggle: () => {
      update((pos) => !pos);
    },
    hide: () => {
      update(() => false);
    },
    show: () => {
      update(() => true);
    },
  };
}

export default openSidebar();
