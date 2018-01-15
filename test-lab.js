const http = require('http'),
    server = http.createServer(),
    url = require('url'),
    indexOfProblems = require('./src/assets/base64_problems.json');

function getTestResults(testFileName) {
    console.log(require(`./algorithms_collection/${testFileName}`).testResults);
    return require(`./algorithms_collection/${testFileName}`).testResults;
}

server.on('request', (req, res) => {

    const problemId = +url.parse(req.url, true).query.problemId,
        testFileName = indexOfProblems.filter(problem => problem.id === problemId)[0].testFileName,
        testResults = getTestResults(testFileName);

    res.writeHead(200, { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(testResults));

})

server.listen(4000, () => console.log('Server started!'))

