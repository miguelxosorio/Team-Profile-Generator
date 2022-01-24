// this is where we add the functions that generate the HTML like in the mock-up

generateHTML = (data) => {
    // declaring this array for where the data of each roles would be pushed
    emptyArray = [];

    // looping through data
    for (let i = 0; i < data.length; i++) {
        // employee variable holds the value of the data
        const employee = data[i]
        // role variable's value is the data value chained with the getRole() function which returns the role of the employee
        const role = employee.getRole();
        // now if roles return true based on the string Manager, Engineer, Intern, one of these if statements will execute
        if(role === 'Manager') {
            // so now we're passing the value of the data in the functions, in this instance stored in the var managerCard
            const managerCard = generateTheManagerCard(employee);
            // then pushing that value, now managerCard into the array
            emptyArray.push(managerCard);
        } else if (role === 'Engineer') {
            const engineerCard = generateTheEngineerCard(employee);
            emptyArray.push(engineerCard)
        } else if (role === 'Intern') {
            const internCard = generateTheInternCard(employee);
            emptyArray.push(internCard)
        }
    }
    // joining the values in the array and storing it in the teamCards variable, now we can use the data inside this var to pass it as an arg and use it in the template lit in the team profile generation
    const teamCards = emptyArray.join('')

    // passing the array's value into the generateTeamProfilePage and then stored in generateTeam var
    const generateTeam = generateTeamProfilePage(teamCards);
    return generateTeam;
};

// generating the manager card
const generateTheManagerCard = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">face</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

// generating the engineer card
const generateTheEngineerCard = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">face</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};

// generating the intern card
const generateTheInternCard = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">face</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};

const generateTeamProfilePage = function(teamCards) {
    // `this is where we put the html content inside the backticks`
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center">MY TEAM</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="cards">
                    <!-- cards -->
                    ${teamCards}
                </div>
            </div>
        </main>
    </body>
    </html>
    `
};

// we export this to index.js
module.exports = generateHTML;