const Employee = require('./Employee');


//intern class
class Intern extends Employee{
    constructor(name, id, email, school){
       super(name, id, email);
            this.school = school;
    }
    getSchool(school){
        return this.school;
    };
     getRole() {
        let role = 'Intern';    
        return role;
     };
}

module.exports = Intern;