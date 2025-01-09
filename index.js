// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
//const inquirer =require('inquirer');
//const fs = require('fs');
//const generateMarkdown =require('./utils/generateMarkdown');

const questions = [
    {type: 'input', name: 'username',message: `What is your GitHub username?`},
    {type: 'input', name: 'email', message: `What is your email address?`},
    {type: 'input', name: 'project', message: `What is the name of your project?`},
    {type: 'input', name: 'description',message: `Provide a short description explaining the what, why, and how of your project.`},
    {type: 'list',  name: 'license', message: `What type of license should your project have?`, choices: ['Apache License 2.0', 'GNU General Public License','MIT License', 'Mozilla Public License 2.0']},
    {type: 'input', name: 'installation', message: `What are the steps required to install your project?`},
    {type: 'input', name: 'usage', message: `Provide instructions and examples for use.`},
    {type: 'input', name: 'contribution',message: `If you would like other developers to contribute, enter your guidelines for how to do so.`}, 
    {type: 'input', name: 'tests',message: `What are the tests for your application?`},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) :console.log(`${filename} has been successfully created!`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then ((answers) => {
    console:log("generateReadMe...");
    writeToFile('README.md', generateMarkdown({...answers}));
});
}
// Function call to initialize app
init();
