class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

// Correct way to call the static method
console.log(User.createId());    // Accessing static method via the User class

// You can also call the static method via the Teacher class because it inherits from User
console.log(Teacher.createId());  // Accessing static method via the Teacher class
