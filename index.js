const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js'); 
const generateTemplate = require('./src/template.js');


employeesArray = [];

function startApp () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager's id:",
        },
        {
            type: "input",
            name:"officeNumber",
            message: "Enter manager's office number:"
        },
    ])
    .then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
        employeesArray.push(manager);
        return employeePrompt();
    })
   
}; 

function employeePrompt () {
    inquirer.prompt ([
        {
            type: "list",
            name: "addEmployee",
            message: "What role would you like to add?",
            choices: [
                "Intern",
                "Engineer",
                "Done building team",
            ],
        },
    ])
    .then(function (dataInput) {
        switch(dataInput.addEmployee) {
            case "Intern":
                internPrompt();
                break;
            case "Engineer":
                engineerPrompt();
                break;

            
        }
    })
}

function internPrompt () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:"
        },
        {
            type: "input",
            name:"id",
            message:"Enter the intern's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school name:"
        }
    ])
    .then(internData => {
        const intern = new Intern(internData.name, internData.id, internData.email, internData.school)
        employeesArray.push(intern);
        return employeePrompt();
    });
}

function engineerPrompt () {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:"
        }
    ])
    .then(engineerData => {
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
        employeesArray.push(engineer)
        return employeePrompt();
    });

}

startApp();