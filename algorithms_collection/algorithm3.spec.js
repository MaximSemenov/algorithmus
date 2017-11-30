const test = [
  { testUnit: 'eye', rightResult: true },
  { testUnit: '_eye', rightResult: true },
  { testUnit: 'Hello', rightResult: true },
  { testUnit: 'race car', rightResult: true },
  { testUnit: 'not a palindrome', rightResult: false },
  { testUnit: 'A man, a plan, a canal. Panama', rightResult: true },
  { testUnit: 'never odd or even', rightResult: true },
  { testUnit: 'nope', rightResult: false },
  { testUnit: 'almostomla', rightResult: false },
  { testUnit: 'My age is 0, 0 si ega ym.', rightResult: true }
];

function palindrome(str) {
  str = str.replace(/_/g, "").replace(/\W/g, "").toLowerCase();
  var mStr = str.split("").reverse().join("");
  mStr = str.split("").reverse().join("").toLowerCase();
  for (var i = 0; i < mStr.length; i++) {
    if (mStr.charAt(i) !== str.charAt(i)) {
      return false;
    }
  }
  return true;
}

exports.TestUnits = test;
exports.Func = palindrome;