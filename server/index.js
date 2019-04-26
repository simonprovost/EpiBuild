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

    if (userName === undefined || projectName === undefined || binaryName === undefined)
        return res.json({
            output: "Missing Argument",
            code: 1,
        });

    console.log("./Scripts/verif_repo.sh " + userName + " " + projectName + " " + binaryName + " " + branchName);

    const output = shell.exec("./Scripts/verif_repo.sh " + userName + " " + projectName + " " + binaryName + " master");

    return res.json({
        output: output.stdout,
        code: output.code,
    });
});

app.post(root + '/getTestsRunExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getTestsRunExecution');

    const output = shell.exec("echo test");

    const user = req.body.user;
    const projectname = req.body.projectName;

    res.json({
        output: output.stdout,
        code: output.code,
    });
});

app.post(root + '/getNormExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getNormExecution');

    const output = shell.exec("echo test");

    const user = req.body.user;
    const projectname = req.body.projectName;

    res.json({
        output: output.stdout,
        code: output.code,
    });
});

app.listen(8080);