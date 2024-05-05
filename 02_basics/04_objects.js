//declaring object using constructor\

// const tinderUser=new Object() //it is a singleton object

const tinderUser={} //line 2 and this line both gives same output but this is not singleton object

tinderUser.id = "123abc"
tinderUser.name = "Surajj"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Suraj",
            lastname: "Pradhan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);