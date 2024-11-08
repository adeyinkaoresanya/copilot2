// create a class Calculator with the following methods:
// add(x, y) returns the sum of x and y
// subtract(x, y) returns the difference of x and y
// multiply(x, y) returns the product of x and y
// divide(x, y) returns the quotient of x and y
// remainder(x, y) returns the remainder of x divided by y
// squareRoot(x) returns the square root of x
// square(x) returns the square of x
// cube(x) returns the cube of x
// cubeRoot(x) returns the cube root of x
// power(x, y) returns x to the power of y
// factorial(x) returns the factorial of x
// isPrime(x) returns true if x is prime, otherwise false
// isEven(x) returns true if x is even, otherwise false
// isOdd(x) returns true if x is odd, otherwise false

class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }

  remainder(x, y) {
    return x % y;
  }

  squareRoot(x) {
    return Math.sqrt(x);
  }

  square(x) {
    return x * x;
  }

  cube(x) {
    return x * x * x;
  }

  cubeRoot(x) {
    return Math.cbrt(x);
  }

  power(x, y) {
    return Math.pow(x, y);
  }

  factorial(x) {
    if (x === 0) {
      return 1;
    }
    return x * this.factorial(x - 1);
  }

  isPrime(x) {
    if (x < 2) {
      return false;
    }
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }

  isEven(x) {
    return x % 2 === 0;
  }

  isOdd(x) {
    return x % 2 !== 0;
  }
}


//export the class
module.exports = Calculator;


//test each method with console.log


//create tests for each method using the jest framework in a file called calculator.test.js
//run the tests using the command npm test
//commit your changes
//push to your repository
