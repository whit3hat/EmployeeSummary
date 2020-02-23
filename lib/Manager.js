const Employee = require('./Employee');


//Manager class
class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        super(name, id, title);
        this.officeNumber = officeNumber;
    }
    getOffice(Manager){
        return this.officeNumber;
    }

    getRole(){
        let role = 'Manager'
        return role;
        
    }
}

module.exports = Manager;