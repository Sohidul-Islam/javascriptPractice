class student {
    name;
    roll;
    class;
    constructor(name, roll, cls) {
        this.name = name;
        this.roll = roll;
        this.class = cls;

    }

}

class exam extends student {
    subject;
    result;
    constructor(name, roll, cls, subject, result) {
        super(name, roll, cls)
        this.subject = subject;
        this.result = result;
    }
    message = () => {
        console.log(`${this.name} is a student of class ${this.class} and roll is ${this.roll}`);
    }
    resultMsg = () => {
        console.log(`${this.name}, ${this.roll} is passed in ${this.subject} and the result is ${this.result}`);
    }
}

let shufol = new exam("Sohidul Islam", "CSE 01806649", "BSC in CSE", "Computer Fundamental", "3.95")

shufol.message()
shufol.resultMsg()