const testedFunction = require('./algorithm1');
testResults = [];

const test = [

  { testUnit: 'Hello', rightResult: 'olleh' },
  { testUnit: 'Howdy', rightResult: 'ydwoH' },
  { testUnit: 'Greetings from Earth', rightResult: 'htraE morf sgniteerG' }

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