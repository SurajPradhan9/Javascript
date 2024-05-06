const user = {
    username: "suraj",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // here this keyword refers to current context means to access the variables from the user(current) scope
        console.log(this);//it gives the output in the form object i.e key values (gives the current context)
    }

}
// user.welcomeMessage();
// user.username = "bhai"
// user.welcomeMessage()

// console.log(this);//gives empty object {} (because current context is empty because we are in node environment ,here, in global there is no context so it is giving output as empty{})

//but if we write this i.e console.log(this) in windows i.e browser we get the output as window object(in browsers global object is window object)


// function chai(){
//     console.log(this); //we get output as some objects but outside function we get empty object(note:we are in node environment)
// }
// chai()


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//undefined //but in above(in user object) we used the same inside an object we got output 
// }
// chai()

// //we can also write the above like this
// const chai = function () {
//     let username = "hitesh"
//     console.log(this);//we get output as some objects but outside function we get empty object(note:we are in node environment)
//     console.log(this.username);//undefined
// }
// chai()


//Arrow function
const chai =  () => {//from above we removed the function keyword and after () we kept the arrow => (and we got the arrow function)
    let username = "hitesh"
    console.log(this);//here in arrow function also we got empty object but in normal function we got some objects
    console.log(this.username);//undefined
}
// chai()


//arrow function ()=>{}


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log( addTwo(1,9))


// // arrow function is also used like this called as implicit return(implicit return means no need to write return keyword explicit return means write return keyword)
// const addTwo = (num1, num2) =>  num1 + num2
// console.log( addTwo(1,9))

// //we can also write like this
// const addTwo = (num1, num2) =>  (num1 + num2) //with parenthesis(if we use{}we should write rwturn keyword ,if we use () no need to write return keyword) //we use more in react
// console.log(addTwo(1,9))

//the use of writing the above that is why we should use parenthesis why not {}
//because if use {} we cannot write an object in side that but if we use () we can write that is
const addTwo = (num1, num2) => ({username: "suraj"})
console.log(addTwo(1,9))//{username: "suraj"} //because  for this arguments we are returning object

// //the use of arrow function is we can use them in many contexts(one of them is using loops eg)
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(()=>{}) //etcc..