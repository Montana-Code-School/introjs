const ROMAN_VALS = [
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000]
];

function romanNumeralConverter(roman) {
  let result = 0;
  ROMAN_VALS.forEach(
    (valPair) => result += countRomans(roman, valPair[0], valPair[1]));
  return result;
}

function countRomans(roman, romanDigit, romanDigitVal) {
  let count = 0;
  for (let index = 0; index < roman.length; index++) {
    if (roman[index] == romanDigit) {
      if (nextDigitIsBigger(romanDigit, roman[index+1])) {
        count -= romanDigitVal;
      } else {
        count += romanDigitVal;
      }
    }
  }
  return count;
}

function nextDigitIsBigger(romanDigit, romanDigitNext) {
  return romanToNumber(romanDigit) < romanToNumber(romanDigitNext);
}

function romanToNumber(romanDigit) {
  let num = 0;
  ROMAN_VALS.forEach((valPair) => {
    if (valPair[0] == romanDigit) {
      num = valPair[1];
    }
  });
  return num;
}

function convert(){
  let roman = document.getElementById('Roman').value;
  let number = romanNumeralConverter(roman);
  document.getElementById('NumberResult').innerHTML = number;
  return false;
}

module.exports = romanNumeralConverter;
