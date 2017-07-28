var assert = require('chai').assert;
var romanNumeralConverter = require('./romanNumeralConverter');

xdescribe("RomanNumeralConverter", function() {
  it("can convert I to 1", function() {
    //Arrange
    var expected = 1;
    //Act
    var actual = fizzBuzz("I");
    //Assert
    assert.equal(actual, expected);
  });

  xit("can convert V to 5", function() {
    //Arrange
    var expected = 5;
    //Act
    var actual = fizzBuzz("V");
    //Assert
    assert.equal(actual, expected);
  });
});
