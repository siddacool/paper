import { writable } from 'svelte/store';
import themeLocalStorage from '~/local-storage/theme';

const defaultTheme = themeLocalStorage.get() ? themeLocalStorage.get() : 'light';

const updateTheme = (val = 'light') => {
  themeLocalStorage.set(val);
};

function theme() {
  const { subscribe, update } = writable(defaultTheme);

  return {
    subscribe,
    toggle: () => {
      update((pos) => {
        const themeToSet = pos === 'light' ? 'dark' : 'light';
        updateTheme(themeToSet);

        return themeToSet;
      });
    },
    light: () => {
      update(() => {
        const themeToSet = 'light';
        updateTheme(themeToSet);

        return themeToSet;
      });
    },
    dark: () => {
      update(() => {
        const themeToSet = 'dark';
        updateTheme(themeToSet);

        return themeToSet;
      });
    },
  };
}

export default theme();
