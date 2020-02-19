const Employee = require('./Employee');


//class of Engineer
class Engineer extends Employee {
    constructor(name, id, title, github) {
        super(name, id, title)
        this.github = github;
    }

    getGithub(){
        
    }

    getRole(){
        return 
    }
}
let bob = new Engineer('Bill', 6, 't@gmail.com', 'twighlight');

console.log(bob.getRole());