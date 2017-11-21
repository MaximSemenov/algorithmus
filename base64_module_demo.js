let fs = require('fs'),
    files,
    problems = [],
    counterId = 0,
    arr = [];


let promise = new Promise(function (resolve, reject) {

    readFilesFromDirectory('./base64_solutions', null, "Error happened");

    function readFilesFromDirectory(directory, fileContent, errorMsg) {
        files = fs.readdir('./base64_solutions', (err, fileNames) => {

            if (err) {
                console.log(`${errorMsg} on readdir function`);
                return;
            }

            resolve(files);



        });

    }


});

promise.then(filess => {
    console.log(files + " ???")
    readAllFiles(filess);

}).then(() => {

    Promise.all(arr).then(v => {

        console.log(v + '- before writes')



        fs.writeFile("./base64_problems.json", JSON.stringify(problems, null, 4), (err) => {

            if (err) {
                console.log(err);
                return;
            }
            console.log(`File 'base64_problems.json' has been created!`);
        });
    });


});

function readAllFiles(filess) {

    filess.forEach(filename => {

        arr.push(new Promise(function (resolve, reject) {

            fs.readFile('./base64_solutions/' + filename, (err, data) => {

                var problem = {},
                    base64Interpretation;

                if (err) {
                    console.log(` on readFile function`);
                    return;
                }

                problem.id = counterId;
                problem.title = "Some Title";
                problem.decription = "Please read me I am a description";
                problem.solution = new Buffer(data).toString('base64');
                problem.filename = filename;

                problems.push(problem);
                counterId++;

                resolve(problem);
            });
        }))
    });




};


// Promise.all(arr).then(v => {

//     console.log(v + '- before writes')



//     fs.writeFile("./base64_problems.json", JSON.stringify(problems, null, 4), (err) => {

//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(`File 'base64_problems.json' has been created!`);
//     });
// });




console.log(problems, ' - list of problems');
