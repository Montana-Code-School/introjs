var assert = require('chai').assert;
var fizzBuzz = require('./fizzBuzz');

function fizzBuzzEvaluate(expected, number){
  var actual = fizzBuzz(number);
  assert.equal(actual, expected);
}

describe("FizzBuzz", function() {
  it("returns 1 for 1", () => fizzBuzzEvaluate("1", 1));
  it("returns Fizz for multiples of 3", () => fizzBuzzEvaluate("Fizz", 6));
  it("returns Buzz for multiples of 5", () => fizzBuzzEvaluate("Buzz",10));
  it("returns 2 for 2", () => fizzBuzzEvaluate("2", 2));
  it("returns FizzBuzz for multiples of 3 and 5",
    () => fizzBuzzEvaluate("FizzBuzz", 30));
  it("returns FizzBuzz for 1500000000",
    () => fizzBuzzEvaluate("FizzBuzz", 1500000000));
});
