const express = require('express');
const shell = require('shelljs');
const app = express();

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
        output: output.stdout,
        code: output.code,
    });
});

app.get(root + '/getNormExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getNormExecution');

    const userName = req.query.userName;
    const projectName = req.query.projectName;
    const branchName = req.query.branchName;
    const normiChoice = req.query.normiChoice;

    if (!userName || !projectName || !branchName)
        return res.json({
            output: "Missing Argument",
            code: 1,
        });
    let output = '';

    if (normiChoice === "normEZ")
        output = shell.exec("./Scripts/runNorminette.sh " + userName + " " + projectName + " " + branchName + " " + "./../../../NormEZ/NormEZ.rb" + " " + "NormEZ.rb");
    else
        output = shell.exec("echo \"Norminette that you've chosen has  not allowed to be executed.\"");

    return res.json({
        output: output.stdout,
        code: output.code,
    });
});

app.get(root + '/getTestsRunExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getTestsRunExecution');

    const userName = req.query.userName;
    const projectName = req.query.projectName;
    const branchName = req.query.branchName;

    if (!userName || !projectName || !branchName)
        return res.json({
            output: "Missing Argument",
            code: 1,
        });

    const output = shell.exec("./Scripts/unitTests.sh " + userName + " " + projectName + " " + branchName);

    return res.json({
        output: output.stdout,
        code: output.code,
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