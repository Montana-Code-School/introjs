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
  if (romanToNumber(romanDigit) < romanToNumber(romanDigitNext)) {
    return true;
  } else {
    return false;
  }
}

function romanToNumber(romanDigit) {
  if (romanDigit == "I") {
    return 1;
  } else if (romanDigit == "V") {
    return 5;
  } else if (romanDigit == "X") {
    return 10;
  } else if (romanDigit == "L") {
    return 50;
  } else if (romanDigit == "C") {
    return 100;
  } else if (romanDigit == "D") {
    return 500;
  } else if (romanDigit == "M") {
    return 1000;
  }
}
// ROMAN_VALS.forEach((valPair) => {
//   if (valPair[0] == romanDigit) {
//     return valPair[1];
//   }
// });
// return 0;

module.exports = romanNumeralConverter;
