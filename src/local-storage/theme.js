import storage from './storage';

const name = 'THEME';

const set = (val = '') => {
  storage.setItems({
    [name]: val,
  });
};

const get = () => {
  return storage.getItem(name);
};

const clear = () => {
  storage.deleteItem(name);
};

export default {
  set,
  get,
  clear,
};
