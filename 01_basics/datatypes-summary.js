//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
//primitive datatypes are call by value


//JavaScript is considered to be a dynamically typed language. This means that variable types are determined at runtime, not during compilation. 
//i.e const score=100 we are not specifying the *type* of the value which is 100

//Number type
const score = 100 //dynamic type
// const score:number=100 //in typescript ehich is static type
const scoreValue = 100.3

const isLoggedIn = false //Boolean type
const outsideTemp = null // null type - null means empty
let userEmail; //undefined type - let userEmail=undefined; both are 

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(typeof id) //symbol
// console.log(id === anotherId); // both are unique they are not same though values are same but they are unique

const bigNumber = 3456543576654356754n //if we keep n at last it is denoted as type bigint
// console.log(typeof bigNumber);//bigint



// Reference (Non primitive)
// Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); //object

//object is returned inside curly braces datatype can be anything inside object i.e it can be string number function array anotherobject boolean etc
let myObj = {
    name: "Suraj",
    age: 20,
}
console.log(typeof myObj); //object

//function
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);// function also called as object function

// https://262.ecma-international.org/5.1/#sec-11.4.3
