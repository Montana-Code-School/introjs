var assert = require('chai').assert;
var fizzBuzz = require('./fizzBuzz');

describe("FizzBuzz", function() {
  it("can convert 1 to 1", function() {
    //Arrange
    var expected = "1";
    //Act
    var actual = fizzBuzz(1);
    //Assert
    assert.equal(actual, expected);
  });

  xit("can convert multiples of 3 to Fizz", function() {
    //Arrange
    var expected = "Fizz";
    //Act
    var actual = fizzBuzz(6);
    //Assert
    assert.equal(actual, expected);
  });

  xit("can convert multiples of 5 to Buzz", function() {
    //Arrange
    var expected = "Buzz";
    //Act
    var actual = fizzBuzz(10);
    //Assert
    assert.equal(actual, expected);
  });

  xit("can convert multiples of 3 and 5 to FizzBuzz", function() {
    //Arrange
    var expected = "FizzBuzz";
    //Act
    var actual = fizzBuzz(30);
    //Assert
    assert.equal(actual, expected);
  });
});
