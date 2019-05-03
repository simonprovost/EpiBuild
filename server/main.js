const express = require('express');
const shell = require('shelljs');
const app = express();
const stripAnsi = require('strip-ansi');

const root = '/api/v1';

function isCriterion(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (stripAnsi(arr[i]) === 'Synthesis:')
            return i;
    }
    return 0;
}

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

    //########## GOOGLE TESTS
    
    if (arrayTests[arrayTests.length - 4] === 'PASSED' || arrayTests[arrayTests.length - 2] === 'FAILED') {
	    console.log('Google Test found');
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
    } else if (isCriterion(arrayTestsErr)) {
        console.log('Criterion found');
        const positionPassing = isCriterion(arrayTestsErr) + 5;
        const positionTested = isCriterion(arrayTestsErr) + 2;
        const passing = stripAnsi(arrayTestsErr[positionPassing]);
        const tested = stripAnsi(arrayTestsErr[positionTested]);

        const nbPassing = Number(passing);
        const nbTested = Number(tested);

        if (nbTested === 0)
    	    percentUnits = 0;
	    else
	        percentUnits = nbPassing * 100 / nbTested;
    }
    console.log(percentUnits);

    return res.json({
        output: "##### Stdout: \n\n" + output.stdout + "##### Stderr: \n\n" + output.stderr,
        code: output.code,
        percentUnitTests: percentUnits,
    });
});

app.listen(8080);