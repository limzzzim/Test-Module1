class Staff {
    constructor(fullname, email) {
        this.Fullname = fullname;
        this.Email = email;
    }
    setFullname(fullname) {
        this.Fullname = fullname;
    }
    setEmail(email) {
        this.Email = email;
    }
    getFullname() {
        return this.Fullname;
    }
    getEmail() {
        return this.Email;
    }
    toString() {
        return `Full name: ${this.Fullname}, Email: ${this.Email}`;
    }
}

let david = new Staff("David", "david@gmail.com");
david.setFullname("David Do");
david.setEmail("david.do@gmail.com");
//console.log(david.toString());

let Staffs = [
    new Staff("Nhu","nhu@gmai.com"),
    new Staff("Ai","ai@gmai.com"),
    david
]

for ( let i=0; i<Staffs.length; i++) {
    console.log(Staffs[i].toString());
}
