const storageName = 'paper-svelte-app';

const getComplete = () => {
  // Create storage if none exists
  if (!localStorage.getItem(storageName)) {
    localStorage.setItem(storageName, JSON.stringify({}));
  }

  return JSON.parse(localStorage.getItem(storageName));
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

  localStorage.setItem(storageName, newStore);
};

const deleteItem = (name) => {
  const store = getComplete();

  if (!store[name]) return;

  delete store[name];

  localStorage.setItem(storageName, JSON.stringify(store));
};

const clear = () => {
  localStorage.setItem(storageName, JSON.stringify({}));
};

const deleteComplete = () => {
  localStorage.removeItem(storageName);
};

export default {
  getComplete,
  getItem,
  setItems,
  deleteItem,
  clear,
  deleteComplete,
};
