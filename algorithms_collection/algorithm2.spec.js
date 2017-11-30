const test = [
  { testUnit: 5, rightResult: 120 },
  { testUnit: 10, rightResult: 3628800 },
  { testUnit: 20, rightResult: 2432902008176640000 },
  { testUnit: 0, rightResult: 1 }

];


function factorialize(num) {
  if (num === 0) { return 1; }
  return (num != 1) ? num * factorialize(num - 1) : 1;
}

exports.TestUnits = test;
exports.Func = factorialize;