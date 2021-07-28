const val = [
  'teste',
  function () {
    console.log('ola');
  },
];

const newVal = val.map((item) => {
  return item * 2;
});

console.log(newVal);
