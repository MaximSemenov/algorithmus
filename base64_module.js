let fs = require('fs'),
    files,
    problems = [],
    counterId = 0,
    arrOfPromises = [];

let promise = new Promise(function (resolve, reject) {

    readFilesFromDirectory('./base64_solutions', null, "There is an Error happened...");

    function readFilesFromDirectory(directory, fileContent, errorMsg) {
        fs.readdir(directory, (err, fileNames) => {

            if (err) {
                console.log(`${errorMsg} on readdir() function`);
                // reject(); ??? Where to place reject ?
                return;
            }
            resolve([fileNames, directory]);
        });
    }
});

promise.then(files => {
    console.log(`These files: '${files[0]}' have been written from ${files[1]} directory.`);

    readAllFiles(files[0]);

    Promise.all(arrOfPromises).then(arrayOfProblems => {
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

    filess.forEach(filename => {

        arrOfPromises.push(new Promise(function (resolve, reject) {

            fs.readFile('./base64_solutions/' + filename, (err, data) => {

                var problem = {};

                if (err) {
                    console.log(`There is an error has accured during the process of reading a file`);
                    console.log(err);
                    return;
                }

                problem.id = counterId;
                problem.title = "Some Title";
                problem.description = "Please read me I am a description";
                problem.solution = new Buffer(data).toString('base64');
                problem.filename = filename;

                problems.push(problem);
                counterId++;

                resolve(problem);
            });
        }))
    });
};

