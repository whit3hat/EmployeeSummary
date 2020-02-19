const inquirer = require('inquirer');
const Employee = require('./Employee');


//class of Engineer
class Engineer extends Employee {
    constructor(github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub(){
        
    }
    getRole(){
        return 'Engineer';
    }
}