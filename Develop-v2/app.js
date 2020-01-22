// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var teamName = [];
var employeeCards = [];
var tempemployee;

function employeeType() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your team name?",
            name: "teamName"
        },
        
        {
            type: "list",
            message: "What is your position in the company",
            name: "position",
            choices: ['Intern', 'Engineer', 'Manager']
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "ID"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        }
    ]).then(answers => {
        tempemployee=answers;
        // employeeCards.push(answers);
        // console.log(employeeCards)
        // console.log(answers.position)
        console.log("inside chk position fx")
    if (answers.position === 'Intern') {
        //console.log("intern");
            typeIntern();
        } else if (answers.position === 'Engineer') {
            //console.log("Engineer");
            typeEngineer();
        } else if (answers.position === 'Manager') {
            //console.log("Manager");
            typeManager();
        }
        //return answers.position;
    })
}

function typeIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Which school do you go to?",
            name: "school"
        }
    ]).then(answer => {
        //finished the last part of the temp obj
        //{ position: 'Intern', ID: '1', email: 'email', school: 'school' }
        tempemployee.school = answer.school;
        console.log(tempemployee);
        //then push final obj to array
        //[ { position: 'Intern', ID: '1', email: 'email', school: 'school' } ]
        employeeCards.push(tempemployee)
        console.log(employeeCards)

    })
}
function typeEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your github name?",
            name: "githubName"
        }
    ]).then(answer => {
        //finished the last part of the temp obj
        //{ position: 'Intern', ID: '1', email: 'email', github: 'school' }
        tempemployee.github = answer.githubName;
        console.log(tempemployee);
        //then push final obj to array
        //[ { position: 'Intern', ID: '1', email: 'email', github: 'school' } ]
        employeeCards.push(tempemployee)
        console.log(employeeCards)

    })
}
function typeManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        }
    ]).then(answer => {
        //finished the last part of the temp obj
        //{ position: 'Intern', ID: '1', email: 'email', officeNumber: 'school' }
        tempemployee.officeNumber = answer.officeNumber;
        console.log(tempemployee);
        //then push final obj to array
        //[ { position: 'Intern', ID: '1', email: 'email', officeNumber: 'school' } ]
        employeeCards.push(tempemployee)
        console.log(employeeCards)

    })
}

var position=employeeType();




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// render(answers);
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

