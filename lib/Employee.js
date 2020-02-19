
const employees = [

];
//Class of Employee
class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName(name){
        return name;
    };

    getId(id){
        return id;
    }
    getEmail(email){
        return email;
    }
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;