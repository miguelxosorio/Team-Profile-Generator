// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager')
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');
const employeeArray = [];

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
    .then(managerData => { 
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        employeeArray.push(manager);
        console.log(manager); // returns Manager { name: 'Me', id: '222', email: '123', officeNumber: '23' }
        console.log(managerData) // returns { name: 'Me', id: '222', email: '123', officeNumber: '23' }
        console.log(employeeArray); // returns [ Manager { name: 'Me', id: '222', email: '123', officeNumber: '23' } ]
    })
};

// .then(response => {
//     const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
//     employeeArray.push(manager)
//     addTheEmployee()
//     console.log(response.name)
// })

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
            // when:(input) => input.role === 'Engineer'
            
        },
        {   // add if employee is an intern
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school."
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        const { name, id, email, role, github, school, confirmEmployee } = employeeData;
        let employee;

        if(role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
            console.log(employee) // returns Engineer { name: 'mark', id: '12', email: 'momo', github: 'momo' }
        } else if(role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee) // returns Intern { name: 'john', id: '23', email: 'momo', school: 'momo' }
        }
    })
}

// addTheManager()
addTheEmployee()