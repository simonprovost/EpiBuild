const express = require('express');
const shell = require('shelljs');
const app = express();
const stripAnsi = require('strip-ansi');

const root = '/api/v1';

app.get(root + '/getMakefileRulesExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getMakefileRulesExecution');

    const userName = req.query.userName;
    const projectName = req.query.projectName;
    const binaryName = req.query.binaryName;
    const branchName = req.query.branchName;

    if (!userName || !projectName || !binaryName)
        return res.json({
            output: "Missing Argument",
            code: 1,
        });

    const output = shell.exec("./Scripts/verif_repo.sh " + userName + " " + projectName + " " + binaryName + " " + branchName);

    return res.json({
        output: "##### Stdout: \n\n" + output.stdout + "##### Stderr: \n\n" + output.stderr,
        code: output.code,
    });
});

app.get(root + '/getNormExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getNormExecution');

    const userName = req.query.userName;
    const projectName = req.query.projectName;
    const branchName = req.query.branchName;
    const normiChoice = req.query.normiChoice;
    let nbNormError = 0;

    if (!userName || !projectName || !branchName)
        return res.json({
            output: "Missing Argument",
            code: 1,
        });
    let output = '';

    if (normiChoice === "normEZ") {
        output = shell.exec("./Scripts/runNorminette.sh " + userName + " " + projectName + " " + branchName + " " + "./../../../norminette/NormEZ/NormEZ.rb" + " " + "NormEZ.rb");
        for (let i = 0; i < output.length; i++) {
            if (output[i] === '\n')
                nbNormError++;
        }
    } else if (normiChoice === "doom") {
        output = shell.exec("./Scripts/runNorminette.sh " + userName + " " + projectName + " " + branchName + " " + "./../../../norminette/Doom/doom" + " " + "doom");
        const arrayOutput = output.split(" ");
        const latestElem = arrayOutput[arrayOutput.length - 4];
        nbNormError = Number(latestElem);
    } else {
        output = shell.exec("echo \"Norminette that you've chosen has  not allowed to be executed.\"");
        nbNormError = 0;
    }
    return res.json({
        output: output.stdout,
        code: output.code,
        normError: nbNormError,
    });
});

app.get(root + '/getTestsRunExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getTestsRunExecution');

    const userName = req.query.userName;
    const projectName = req.query.projectName;
    const branchName = req.query.branchName;
    const rulesName = req.query.rulesName;
    let percentUnits = 0;

    if (!userName || !projectName || !branchName || !rulesName)
        return res.json({
            output: "Missing Argument",
            code: 1,
        });

    const output = shell.exec("./Scripts/unitTests.sh " + userName + " " + projectName + " " + branchName + " " + rulesName);
    const arrayTests = output.split(" ");
    const arrayTestsErr = output.stderr.split(" ");
    //const latestElem = arrayTests[arrayTests.length - 1];

    //########## GOOGLE TESTS
    console.log("DEBUG ALL:" + arrayTestsErr);
    console.log("debug arr:" + arrayTestsErr[arrayTestsErr.length - 2]);

    if (arrayTests[arrayTests.length - 4] === 'PASSED' || arrayTests[arrayTests.length - 2] === 'FAILED') {
        /* we are with google tests here */
        /*
        * 1 FAILED TEST
        * [  PASSED  ] 50 tests.
        * */

        if (arrayTests[arrayTests.length - 4] === 'PASSED')
            percentUnits = 100;
        else if (arrayTests[arrayTests.length - 2] === 'FAILED') {
            const nbFailed = Number(arrayTests[arrayTests.length - 3]);
            let nbPassed = 0;
            let searchIndexPassed = 0;

            for (let i = 0 ; i < arrayTests.length ; i++)
                if (arrayTests[i] === ("PASSED"))
                    searchIndexPassed = i;
            nbPassed  = Number(arrayTests[searchIndexPassed + 3]);
            percentUnits = (nbPassed / (nbPassed + nbFailed)) * 100;
        } else {
            percentUnits = 0;
        }
    } else if (arrayTestsErr[arrayTestsErr.length - 3] === 'Crashing:') {
        console.log("YOP");
        /* We are in Criterion */
            /*[====] Synthesis: Tested: 19 | Passing: 19 | Failing: 0 | Crashing: 0 */
        //      const passing = Number(arrayTestsErr[arrayTestsErr.length - 8]);
        //      const failing = Number(arrayTestsErr[arrayTestsErr.length - 5]);
        //      let crashing = Number(arrayTests[arrayTests.length - 1]);
        console.log("debugpassing: " + arrayTestsErr[arrayTestsErr.length - 8] + "]]]]");
        let passing = (arrayTestsErr[arrayTestsErr.length - 8]);
        let failing = (arrayTestsErr[arrayTestsErr.length - 5]);
    /*
        passing = passing.replace(/\033\[[0-9;]*m/,"");
        failing = failing.replace(/\033\[[0-9;]*m/,"");*/
        stripAnsi(passing);
        stripAnsi(failing);
        const nbPassing = Number(passing);
        const nbFailing = Number(failing);
        console.log("debug : " + nbPassing);
        console.log("debug1: " + nbFailing);
        console.log("debugres: " + (nbPassing + nbFailing));
        percentUnits = (nbPassing / (nbPassing + nbFailing)) * 100;
    }

    return res.json({
        output: output.stdout,
        code: output.code,
        percentUnitTests: percentUnits,
    });
});

// app.post(root + '/getTestsRunExecution', (req, res) => {
//     console.log(req.ip + ' is connecting to getTestsRunExecution');

//     const output = shell.exec("echo test");

//     const user = req.body.user;
//     const projectname = req.body.projectName;

//     res.json({
//         output: output.stdout,
//         code: output.code,
//     });
// });

// app.post(root + '/getNormExecution', (req, res) => {
//     console.log(req.ip + ' is connecting to getNormExecution');

//     const output = shell.exec("echo test");

//     const user = req.body.user;
//     const projectname = req.body.projectName;

//     res.json({
//         output: output.stdout,
//         code: output.code,
//     });
// });

app.listen(8080);