const inquirer = require('inquirer');

// Add a function for Manager wrapping the inquirer.prompt
inquirer.prompt([
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