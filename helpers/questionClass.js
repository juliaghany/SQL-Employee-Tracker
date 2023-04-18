// define class called Question 

class Question {
    constructor(name, message) {
        this.name = name;
        this.message = message
    }
}

// define InputQuestion class that extends the Question class

class InputQuestion extends Question {
    constructor(name, message) {
        super(name, message)
        this.type = "input"
    }
}

// define ListQuestion class that extends Question class

class ListQuestion extends Question {
    constructor(name, message, choices) {
        super(name, message)
        this.type = "list"
        this.choices = choices
    }
}

// export InputQuestion and ListQuestion to be used in helpers.js file

module.exports = {InputQuestion, ListQuestion}