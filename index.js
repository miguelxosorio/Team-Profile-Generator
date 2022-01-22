// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');

// Add a function for Manager wrapping the inquirer.prompt
const addTheManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's e-mail address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ])
}

const addTheEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email."
        },
        {   // add if employee is an engineer
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username."
        },
        {   // add if employee is an intern
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school."
        }
    ])
}