const Employee = require('./Employee');


//class of Engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub(){
        
    }
    getRole(){
        return 'Engineer';
    }
}
let bob = new Engineer('Bill', 6, 't@gmail.com', 'twighlight');

console.log(bob.getRole());