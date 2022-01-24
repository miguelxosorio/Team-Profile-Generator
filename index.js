// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
// importing the generateHTML page
const generateHTML = require('./src/generateHTML');
// Importing the classes 
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');
const { buildFailureTestResult } = require('@jest/test-result');
// declaring an empty array for where the employees would be pushed
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
            message: "What is the manager's e-mail address?",
            validate: email => {
                validation = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(email)
                if(validation) {
                    return true;
                } else {
                    console.log('Please enter a valid e-mail address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ])
    .then(managerData => {
        // desctructuring the object, instead of declaring them one by one, saves lines of code, arguably easier? 
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        employeeArray.push(manager);
        //console.log(manager); // returns Manager { name: 'Me', id: '222', email: '123', officeNumber: '23' }
        //console.log(managerData) // returns { name: 'Me', id: '222', email: '123', officeNumber: '23' }
        //console.log(employeeArray); // returns [ Manager { name: 'Me', id: '222', email: '123', officeNumber: '23' } ]
        //console.log(manager.name, manager.id, manager.email, manager.officeNumber); // returns Miguel 2345 miguel@gmail.com 2000
    })
};

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
            message: "Please enter the employee's email.",
            validate: email => {
                validation = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(email)
                if(validation) {
                    return true;
                } else {
                    console.log('Please enter a valid e-mail address');
                    return false;
                }
            }
        },
        {   // only ask if employee is an engineer
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when:(input) => input.role === 'Engineer', // setting up the when method passing input as the param, that this question will only be asked if input role is equal to the string Engineer
        },
        {   // only ask if employee is an intern
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            when:(input) => input.role === 'Intern', // setting up the when method passing input as the param, that this question will only be asked if input role is equal to the string Intern
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
        let employee; // can't use const, it errors, let makes the variable reusable?

        if(role === 'Engineer') {
            employee = new Engineer (name, id, email, github); // using the parameters from the classes
            // console.log(employee) // returns Engineer { name: 'mark', id: '12', email: 'momo', github: 'momo' }
        } else if(role === 'Intern') {
            employee = new Intern (name, id, email, school); // using the parameters from the classes
            // console.log(employee) // returns Intern { name: 'john', id: '23', email: 'momo', school: 'momo' }
        }

        employeeArray.push(employee)
        // console.log(employeeArray) // returns [ Engineer { name: 'M', id: '12', email: 'gmail', github: 'Mgit' }, Intern { name: 'Ad', id: '23', email: 'yahoo', school: 'FSU' } ]

        // setting the condition for 'Would you like to add more team members?'
        // if this returns true, 'Y', the function routes back to the addThenEmployee, asks the questions and then pushes to the employeeArray[]
        if(confirmEmployee) {
            return addTheEmployee(employeeArray);
        } else {
            // else, or if it returns false, 'N' by default, just return the employeeArray
            return employeeArray;
        }  
    })
}

// function to generate HTML page
const writeTheFile = data => {
    //fs.writeFile('where to make the file', data, err => { write condition, err, console log err, console log that the file has been generated })
    fs.writeFile('./dist/index.html', data, err => {
        // catch error
        if(err) {
            console.log(err);
            return;
        // if no errors, successful
        } else {
            console.log('The team profile has been created, file is found in /dist/index.html');
        }
    })
}

// chain function invocation for addTheManager() and addTheEmployee()
addTheManager()
.then(addTheEmployee)
.then(employeeArray => {
    return generateHTML(employeeArray);
})
.then(teamHTML => {
    return writeTheFile(teamHTML);
})
.catch(err => {
    console.log(err);
});