const testedFunction = require('./algorithm3');
testResults = [];

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

testSolution();

function testSolution() {

  test.forEach(testObject => {

    const functionExecution = testedFunction.f(testObject.testUnit);

    testResults.push({
      testUnit: testObject.testUnit,
      testReport: {
        result: functionExecution,
        expectedResult: testObject.rightResult,
        passed: functionExecution === testObject.rightResult
      }
    })
  });
  return testResults;
}

exports.testResults = testResults;
