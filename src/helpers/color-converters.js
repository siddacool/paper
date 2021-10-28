export const RGBToHex = (value) => {
  var hexadecimal = value.toString(16);
  return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal;
};
