//objects can be declared in two ways 1. literal 2. constructor

//when we declare using lieral it doesnt create singleton object (but creates multiple instances)
//but when we decalre using constructor it creates singleton object

// singleton
// Object.create (constructor method)

// object literals
//declaring dobject

const mySym = Symbol("key1")//declaring symbol

const JsUser={
    name: "Suraj", //key:value // we not specified name(key) inside "" but bydefault the system process name to "name"which  is string, but value ("suraj") can be anything it can be string number boolean function array or object.
    "full name":"Suraj Pradhan",
    [mySym]: "mykey1", //creating key of symbol from above (line 12) //if we would write mySym: "mykey1" (this is not a symbol it is a string) to specify it is symbol write inside[] and if we are using[] we are refering the symbol from line 12
    age: 20,
    location: "Hyderabad",
    email: "suraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// //Accessing object in 2 ways
// console.log(JsUser.email)//(1st way)//suraj@google.com 
// console.log(JsUser["email"])//(2nd way)//suraj@google.com (key is a string so we specified inside "")

// //prefer using 2nd way because if we have a key inside "" we cannot access using 1st way which is dot
// // but we can access 2nd way in all aspects
//*****we commonly use only dot operator is few cases we should use[];*****
// console.log(JsUser["full name"]);//Suraj Pradhan


// console.log(JsUser[mySym])//mykey1
// console.log(typeof JsUser[mySym])//string because mykey1 is string


// //changing values of object
// JsUser.email = "suraj@chatgpt.com"

// //if we want to lock the values i.e freeze no one can change it then use
// Object.freeze(JsUser)

// JsUser.email = "suraj@microsoft.com"//not changed because it is freezed but it doesnt give any error
// console.log(JsUser);



//In javascript functions are used as type1 citizens meaning that we can treat them as variables
JsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(JsUser.greeting);//[Function (anonymous)] //(function return back)function is not executed reference is returned
console.log(JsUser.greeting());//Hello JS user \n undefined


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//if we want to reference the object properties then we use this keyword because we can have multiple objects with name property (this in above context refers to Jsuser)
}
console.log(JsUser.greetingTwo());//Hello JS user, Suraj \n undefined
//the output give undefined also because one  execution is done automatically (undefined is also showed in browsers)