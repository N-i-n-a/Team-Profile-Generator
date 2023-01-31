const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

    const managerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your team manager`\s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team manager`\s ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team manager`\s email address?'
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your team manager`\s office number?'
        }
    ]

    const engineerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer`\s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer`\s ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer`\s email address?'
        },
        {
            type: 'inpit',
            name: 'github',
            message: 'What is the engineer`\s GitHub profile name?'
        }
    ]

    const internQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern`\s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern`\s ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern`\s email address?'
        },
        {
            type: 'inpit',
            name: 'school',
            message: 'What is the intern`\s School name?'
        }
    ]

function chooseEmployee () {
     inquirer.prompt ([
        {
            type: 'list',
            name: 'options',
            message: 'Would you like to add any more team members?',
            choices: [
            {
                name: 'Add an engineer',
                value: 'engineer'
            },
            {
                name: 'Add an intern',
                value: 'intern'
            },
            {
                name: 'Finish building the team',
                value:'exit'
            }]
        }
    ])
    .then ((value) => {
        if (value.choices === 'engineer') {
            inquirer.prompt(engineerQuestions)
        };
        if (value.choices === 'intern') {
            inquirer.prompt(internQuestions)
        };
        if (value.choices === 'exit') {
            console.log (
                `
                You have successfully generated your Team Profile
                -------------------------------------------------
                `
            )
            .then(render(answers));
        };
    })

}

// function to initialize program
function init() {
    console.log(
    `
    Welcome to the Team Profile Generator
    -------------------------------------
    `
    )
    inquirer.prompt(managerQuestions)
    .then (chooseEmployee)
    // .then(answers => console.log(answers));
}

// function call to initialize program
init();