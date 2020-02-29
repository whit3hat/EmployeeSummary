const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

//array for team info to be stored
const team = [];

function app(){

     inquirer.prompt([
            {
                type: 'list',
                name: 'jobTitle',
                message: 'What type of Team Member are we adding?',
                choices: ['Manager', 'Intern', 'Engineer', 'done']
            }

        ]).then(userResponse => {
            switch (userResponse.jobTitle){
                //if Engineer is selected ask these questions to get info
                case 'Engineer':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Engineer Name:'
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Engineer ID:'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Engineers Email:'
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: 'Engineers Github:'
                        },
                        //create the new engineer item, pass to array then go to getTeam() again
                    ]).then(function engineer(engineerData){
                         console.log(engineerData);
                         team.push(new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github));
                         console.log(engineer);
                         app();
                    });
                    break;
                    //if Manager is selected ask the questions to create manager object
                case 'Manager':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Managers Name:'
                        },
                        {
                            type: 'input',
                            name: 'id',
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
                    ]).then(function manager(managerData){
                        console.log(managerData);
                        team.push(new Manager(managerData.name,managerData.id, managerData.managerTitle, managerData.managerOffice ));
                        console.log(manager);
                        app();
                    });
                    break;
                    //if Intern is selected ask questions to create the intern object
                    case 'Intern':
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'Intern Name:',
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'Intern ID:'
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'Intern Email:'
                            },
                            {
                                type: 'input',
                                name: 'internSchool',
                                message: 'Interns School:'
                            },
                            //create new intern object, add to array then go to getTeam()
                        ]).then(function intern(internData){
                            console.log(internData)
                            team.push(new Intern(internData.name, internData.id, internData.email, internData.internSchool));
                            app();
                        });
                        break;
                        //if they select done it will stop the prompts
                        case 'done' :
                            return;
                            //if nothing is selected go back to question
                        default:
            };
        });

    };


//HTML to generate the info for the employees
function generateHTML() {
    let HTML = `<!DOCTYPE html>
    <head>
        <title></title>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    
        <style>
            header {
                position: relative;
                background-color: red;
                color: black;
                width: 100%;
                height: 100px;
            }
            header h1{
                position: relative;
                left: 40%
            }
            .card col-md-2{
                border: solid;
            }
            .card-header {
                background-color: blue;
                color: white;
            }
            .card-body {
                color: teal
            }
            .row{
                place-content: center;
            }
        </style>
    </head>
    
    <body background="../asset/interlaced1/interlaced.png">
        <header>
            <h1>My Team</h1>
        </header>
        <div class=row>`

        //loop to add the user info to the HTML
        for (let i = 0; i < team.length; i++) {
            HTML += `<div class="card col-md-2" style="width: 18rem;">
                <div class="card-header">
                    <h2 class="card-title"><span id="name">${team[i].name}</span> 
                    <br> 
                    ${team[i].getRole()}
                    </h2>
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <div>ID: <span id="ID">${team[i].id}</span></div>
                            <div>Email: <span id="email">${team[i].email}</span></div>
                        <div>${team[i].role}: <span id="role">${team[i].getDiffRole()}</span></div>
                    </p>
                </div>
            </div>`
        }
    
        HTML += `</div></body></html>`
        return HTML;
    }
//run the app to build the team
app();

