const inquirer = require('inquirer');
const Employee = require('./Employee');


//Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOffice(officeNumber){
        return officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}