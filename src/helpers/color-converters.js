export const componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

export const rgbToHex = (rgb) => {
  let rgbInternal = `${rgb}`;

  let [r, g, b] = rgbInternal.replace('rgb(', '').replace(')', '').replace(/\s/g, '').split(',');

  r = parseInt(r, 10);
  g = parseInt(g, 10);
  b = parseInt(b, 10);

  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
