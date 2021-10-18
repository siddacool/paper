import { browser } from '$app/env';
const storageName = 'paper-svelte-app';

const getComplete = () => {
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

const getItem = (name) => {
  const store = getComplete();

  if (!store[name]) return '';

  return store[name];
};

const setItems = (list = {}) => {
  // List = { filed: 'value' }
  const store = getComplete();

  const newStore = JSON.stringify(Object.assign({}, store, list));

  if (browser) {
    localStorage.setItem(storageName, newStore);
  }
};

const deleteItem = (name) => {
  const store = getComplete();

  if (!store[name]) return;

  delete store[name];

  if (browser) {
    localStorage.setItem(storageName, JSON.stringify(store));
  }
};

const clear = () => {
  if (browser) {
    localStorage.setItem(storageName, JSON.stringify({}));
  }
};

const deleteComplete = () => {
  if (browser) {
    localStorage.removeItem(storageName);
  }
};

export default {
  getComplete,
  getItem,
  setItems,
  deleteItem,
  clear,
  deleteComplete,
};
