var assert = require('chai').assert;
var romanNumeralConverter = require('./romanNumeralConverter');

function romanEval(expected, number) {
  var actual = romanNumeralConverter(number);
  assert.equal(actual, expected);
}

describe("RomanNumeralConverter", function() {
  it("can convert I to 1", () => romanEval(1, "I"));
  it("can convert V to 5", () => romanEval(5, "V"));
  it("can convert II to 2", () => romanEval(2, "II"));
  it("can convert X to 10", () => romanEval(10, "X"));
  it("can convert IV to 4", () => romanEval(4, "IV"));
  it("can convert XX to 20", () => romanEval(20, "XX"));
  it("can convert IX to 9", () => romanEval(9, "IX"));
  it("can convert IL to 49", () => romanEval(49, "IL"));
  it("can convert C to 100", () => romanEval(100, "C"));
  it("can convert IC to 99", () => romanEval(99, "IC"));
  it("can convert D to 500", () => romanEval(500, "D"));
  it("can convert ID to 499", () => romanEval(499, "ID"));
  it("can convert M to 1000", () => romanEval(1000, "M"));
  it("can convert IM to 999", () => romanEval(999, "IM"));
  it("can convert MCMLXXIX to 1979", () => romanEval(1979, "MCMLXXIX"));
  it("can convert MMMIM to 3999", () => romanEval(3999, "MMMIM"));
});
