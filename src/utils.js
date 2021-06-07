const getExp = (array) => {
  return array.reduce((sum, elem) => sum + elem.base_experience, 0);
};

const shuffle = (input) => {
  return input
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

const split = (input) => {
  return [input.slice(0, 4), input.slice(-4)];
};

export default { getExp, shuffle, split };
