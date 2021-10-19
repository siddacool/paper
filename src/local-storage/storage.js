import { browser } from '$app/env';
const storageName = 'paper-svelte-app';

export const getComplete = () => {
  // Create storage if none exists

  if (browser) {
    if (!localStorage.getItem(storageName)) {
      localStorage.setItem(storageName, JSON.stringify({}));
    }

    return JSON.parse(localStorage.getItem(storageName));
  } else {
    return {};
  }
};

export const getItem = (name) => {
  const store = getComplete();

  if (!store[name]) return '';

  return store[name];
};

export const setItems = (list = {}) => {
  // List = { filed: 'value' }
  const store = getComplete();

  const newStore = JSON.stringify(Object.assign({}, store, list));

  if (browser) {
    localStorage.setItem(storageName, newStore);
  }
};

export const deleteItem = (name) => {
  const store = getComplete();

  if (!store[name]) return;

  delete store[name];

  if (browser) {
    localStorage.setItem(storageName, JSON.stringify(store));
  }
};

export const clear = () => {
  if (browser) {
    localStorage.setItem(storageName, JSON.stringify({}));
  }
};

export const deleteComplete = () => {
  if (browser) {
    localStorage.removeItem(storageName);
  }
};

export const newStorage = (name = '') => {
  const set = (val = '') => {
    setItems({
      [name]: val,
    });
  };

  const get = () => {
    return getItem(name);
  };

  const clear = () => {
    deleteItem(name);
  };

  return {
    set,
    get,
    clear,
  };
};
