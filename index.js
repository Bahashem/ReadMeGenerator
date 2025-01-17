// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

const questions = [
    {type: 'input', name: 'github',message: `What is your GitHub username?`},
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
    fs.writeFile(fileName, data, (err) =>{
        if (err) {
            if (err.code === 'ENOENT'){
                console.error(`Error: The specific path "${fileName}" does not exist.`);
            } else if (err.code === 'EACCES'){
                console.error(`Error: Insufficient permission to write to "${fileName}".`);
            } else {
                console.error(`An unexpected error occured while writing to the file: ${err.message}`);
            }
            console.error(`Error Stack: ${err.stack}`);
        } else {
            console.log(`"${fileName}" has been successfully created!`);
        }
        });
    }
                    
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then ((answers) => {
    console.log("generateReadMe");
    writeToFile('README.md', generateMarkdown({...answers}));
});
}
// Function call to initialize app
init();