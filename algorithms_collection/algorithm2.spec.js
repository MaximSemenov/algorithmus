const testedFunction = require('./algorithm2');
testResults = [];

const test = [
  { testUnit: 5, rightResult: 120 },
  { testUnit: 10, rightResult: 3628800 },
  { testUnit: 20, rightResult: 2432902008176640000 },
  { testUnit: 0, rightResult: 1 }
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
