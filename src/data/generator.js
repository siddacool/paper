export const generateNumRange = (start = 1, end = 10, text = '') => {
  const range = [];

  for (let i = start; i <= end; i++) {
    range.push({
      value: `${text}-${i}`,
      name: `${text} ${i}`,
    });
  }

  return range;
};
