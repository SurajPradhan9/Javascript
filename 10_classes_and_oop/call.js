// refer 2 screenshots
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)//(refer video)after calling it will execute, after that it will remove from callstack, then there will be no variables,so after executing it will remove from callstack-parallely to hold the reference and get the username we use .call(this,username) 
    ///call method passes current execution context to another function

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);