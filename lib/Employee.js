const inquirer = require('inquirer');

const employees = [

];
//Class of Employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(name){
        
    };

    getId(id){

    }
    getEmail(email){

    }
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;