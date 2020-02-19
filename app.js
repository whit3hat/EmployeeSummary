const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const team = [];

function app(){

    function getTeam(){

        inquirer.prompt([
            {
                type: 'list',
                name: 'jobTitle',
                message: 'What type of Team Member are we adding?',
                choices: ['Manager', 'Intern', 'Engineer']
            }

        ]).then(userResponse => {
            switch (userResponse.jobTitle){
                //if Engineer is selected ask these questions to get info
                case 'Engineer':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'engineerName',
                            message: 'Engineer Name:'
                        },
                        {
                            type: 'input',
                            name: 'engineerId',
                            message: 'Engineer ID:'
                        },
                        {
                            type: 'input',
                            name: 'engineerTitle',
                            message: 'Engineers Title:'
                        },
                        {
                            type: 'input',
                            name: 'engineerGithub',
                            message: 'Engineers Github:'
                        },
                        //create the new engineer item, pass to array then go to getTeam() again
                    ]).then();
                    break;
                    //if Manager is selected ask the questions to create manager object
                case 'Manager':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'managerName',
                            message: 'Managers Name:'
                        },
                        {
                            type: 'input',
                            name: 'managerID',
                            message: 'Managers ID:'
                        },
                        {
                            type: 'input',
                            name: 'managerTitle',
                            message: 'Managers Title:'
                        },
                        {
                            type: 'input',
                            name: 'managerOffice',
                            message: 'Office Number:'
                        },
                        //create the new maanger object then go back to getTeam()
                    ]).then()
                    break;
                    //if Intern is selected ask questions to create the intern object
                    case 'Intern':
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'internName',
                                message: 'Intern Name:',
                            },
                            {
                                type: 'input',
                                name: 'internID',
                                message: 'Intern ID:'
                            },
                            {
                                type: 'input',
                                name: 'internTitle',
                                message: 'Intern Title:'
                            },
                            {
                                type: 'input',
                                name: 'internSchool',
                                message: 'Interns School:'
                            },
                            //create new intern object, add to array then go to getTeam()
                        ]).then()
                        break;
                            //if nothing is selected go back to question
                        default:
                            getTeam();
            };
        });

    };
};
//run the app to build the team
app();