const express = require('express');
const shell = require('shelljs');
const app = express();

const root = '/api/v1';

app.get(root + '/getMakefileRulesExecution', (req, res) => {
    console.log(req.ip + ' is connecting to getMakefileRulesExecution');

    const output = shell.exec("./../../Script/verif_repo.sh simon1.provost PSU_minishell1_2017 mysh master");
    //todo /*we need to get the login / name project / bynary name plus branch choice */

    res.json({
        output: output.stdout,npm install pm2 -g
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