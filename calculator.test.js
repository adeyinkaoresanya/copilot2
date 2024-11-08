const Calculator = require('./calculator');

const calculator = new Calculator();

test('add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('multiply', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('divide', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('remainder', () => {
  expect(calculator.remainder(1, 2)).toBe(1);
});

test('squareRoot', () => {
  expect(calculator.squareRoot(9)).toBe(3);
});

test('square', () => {
  expect(calculator.square(3)).toBe(9);
});

test('cube', () => {
  expect(calculator.cube(3)).toBe(27);
});

test('cubeRoot', () => {
  expect(calculator.cubeRoot(27)).toBe(3);
});

test('power', () => {
  expect(calculator.power(3, 3)).toBe(27);
});

test('factorial', () => {
  expect(calculator.factorial(5)).toBe(120);
});

test('isPrime', () => {
    expect(calculator.isPrime(5)).toBe(true);
  });