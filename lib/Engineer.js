const Employee = require("./Employee")

class Engineer extends Employee{
    constructor (name, id, email, github) {
        super();
        this.github = github;
    
    }
}

module.exports = Engineer;