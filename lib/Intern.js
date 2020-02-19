const Employee = require('./Employee');


//intern class
class Intern extends Employee{
    constructor(name, id, title, school){
       super(name, id, title);
            this.school = school;
    }
    getSchool(school){
        return school;
    };
     getRole() {
            return 'Intern'
     };
}