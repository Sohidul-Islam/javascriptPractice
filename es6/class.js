class Support {
    name;
    role = "support web dev";
    address = "Dhaka"
    constructor(name, address) {
        this.name = name
        this.address = address

    }
    startSessions() {
        console.log(this.name, " Start a support session");
    };
}

const aamir = new Support("Amir khan", "Bangladesh")
const Salman = new Support("Salman khan", "India")
const Sharuk = new Support("Sharuk khan", "India")
const Akshay = new Support("Akshay Kumar", "India")
console.log(aamir);
console.log(Salman);
console.log(Sharuk);
console.log(Akshay);

aamir.startSessions()
Salman.startSessions()
Sharuk.startSessions()
Akshay.startSessions()