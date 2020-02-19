const inquirer = require('inquirer');
const Employee = require('./Employee');


//Manager class
class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        super(name, id, title);
        this.officeNumber = officeNumber;
    }
    getOffice(officeNumber){
        return officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}