import { writable } from 'svelte/store';
import themeLocalStorage from '~/local-storage/theme';

function theme() {
  const defaultTheme = themeLocalStorage.get() ? themeLocalStorage.get() : 'light';
  const { subscribe, update } = writable(defaultTheme);

  return {
    subscribe,
    toggle: () => {
      update((pos) => {
        const themeToSet = pos === 'light' ? 'dark' : 'light';
        themeLocalStorage.set(themeToSet);

        return themeToSet;
      });
    },
    light: () => {
      update(() => {
        const themeToSet = 'light';
        themeLocalStorage.set(themeToSet);

        return themeToSet;
      });
    },
    dark: () => {
      update(() => {
        const themeToSet = 'dark';
        themeLocalStorage.set(themeToSet);

        return themeToSet;
      });
    },
  };
}

export default theme();
