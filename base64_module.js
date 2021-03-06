let fs = require('fs'),
    files,
    counterId = 0;


let promise = new Promise(function (resolve, reject) {

    readFilesFromDirectory('./algorithms_collection', null, "There is an Error happened...");

    function readFilesFromDirectory(directory, fileContent, errorMsg) {
        fs.readdir(directory, (err, fileNames) => {

            if (err) {
                console.log(`${errorMsg} on readdir() function`);
                return;
            }
            resolve([fileNames, directory]);
        });
    }
});

promise.then(files => {

    console.log(`These files: '${files[0]}' have been written from ${files[1]} directory.`);

    readAllFiles(files[0]).then(problems => {
        fs.writeFile('./src/assets/base64_problems.json', JSON.stringify(problems, null, 4), (err) => {

            if (err) {
                console.log(err);
                return;
            }
            console.log(`A new JSON file named 'base64_problems.json' has been successfully created!`);
        });
    });

});


function readAllFiles(filess) {

    const arrOfPromises = [],
        problems = []

    filess.forEach(filename => {

        arrOfPromises.push(new Promise(function (resolve, reject) {

            fs.readFile('./algorithms_collection/' + filename, (err, data) => {

                var problem = {};

                if (err) {
                    console.log(`There is an error has accured during the process of reading a file`);
                    console.log(err);
                    return;
                }

                problem.id = counterId;

                problem.title = data.toString().match(/#.+#/)[0].replace(/#/g, "");
                problem.description = data.toString().match(/@.+@/)[0].replace(/@/g, "");
                problem.testFileName = data.toString().match(/~.+~/)[0].replace(/~/g, "");
                problem.fileName = filename;
                data = data.toString().match(/%&[^]+%&/g)[0].replace(/%&/g, "").replace(/(\/\/)/, "");
// .replace.replace is not a good solutions, change when I have more time. 
                problem.solution = new Buffer(data).toString('base64');

                problems.push(problem);
                counterId++;

                resolve(problem);
            });
        }))
    });

    return Promise.all(arrOfPromises).then(_ => problems);
};

// TODO 1. Use JSDoc instead of custom marks.
// TODO 2. This base 64 module works manually make automatically on the server. 
// TODO 3. Change the way of reading files from a directory because it grabes (reads) test files .spec.js which should be avoided.
// Maxim Semenov