const http = require('http');
const server = http.createServer();
const url = require('url');
const fs = require('fs');
const indexOfProblems = require('./src/assets/base64_problems.json');

function testProblemSolution(testFileName) {

    const testPack = require('./algorithms_collection/' + testFileName.replace('.js', '.spec.js'));
    const testResultsNode = [];

    testPack.TestUnits.forEach(item => {

        const functionExecution = testPack.Func(item.testUnit);

        testResultsNode.push({
            testUnit: item.testUnit,
            testReport: {
                result: functionExecution,
                expectedResult: item.rightResult,
                passed: functionExecution === item.rightResult
            }
        })
    });

    return testResultsNode;
}

server.on('request', (req, res) => {

    const problemId = +url.parse(req.url, true).query.problemId;

    const testFileName = indexOfProblems.filter(problem => problem.id === problemId)[0].filename;

    const data = testProblemSolution(testFileName);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));

})

server.listen(4000, () => console.log('Server started!'))

