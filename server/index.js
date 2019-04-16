const express = require('express');
const shell = require('shelljs');
const app = express();

const root = '/api/v1';

app.get(root + '/getMakefileRulesExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getMakefileRulesExecution');

    // const user = req.body.user;
    // const projectname = req.body.projectName;

    const output = shell.exec("echo test");

    res.json({
        output: output.stdout,
        code: output.code,
    });
});

app.post(root + '/getTestsRunExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getTestsRunExecution');

    const user = req.body.user;
    const projectname = req.body.projectName;

    res.json();
});

app.post(root + '/getNormExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getNormExecution');

    const user = req.body.user;
    const projectname = req.body.projectName;

    res.json();
});

app.listen(8080);