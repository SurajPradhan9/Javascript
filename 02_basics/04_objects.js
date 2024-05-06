//declaring object using constructor

// const tinderUser=new Object() //it is a singleton object

const tinderUser={} //line 3 and this line both gives same output but this is not singleton object

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




//combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// Object.assign(target,source)
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
//eg:
// const obj3=Object.assign({},obj1,obj2,obj4)//first param is target means all the values(sources) i.e obj 1 2 and 4 are assigned to {}
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// // //for understanding see below
// const obj3=Object.assign(obj1,obj2,obj4)//obj1 is target all values of obj2 and obj4 are assigned to obj1
// console.log(obj1==obj3); //true//because obj3 and obj1 are same now because first param is target and we kept obj1

//the above method we dont use more we use spread opeartor 90percent of the times because it gives same output & easy
//spread operator
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }




//when we get values from database we get in a array form ,inside array we have objects 
const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]

// //to access them we use
// console.log( users[1].email);//v@gmail.com//users[1] means first index and we use . opeartor access the object values



// //from tinderUser object
// console.log(tinderUser);//{ id: '123abc', name: 'Surajj', isLoggedIn: false }
// //if we want to access keys,values,entries of the object
// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ] //we get  the output form of array
// console.log(Object.values(tinderUser));//[ '123abc', 'Surajj', false ]
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Surajj' ], [ 'isLoggedIn', false ] ]//the key value pair is made in to array i.e array inside array



//when we are looping through an object and taking a value from the object ,but sometimes the value doesnt exists in this case we first try to know that the value exists or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true




//destructuring of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//to acesss the values in course we use 2 methods 
console.log(course.courseInstructor);//hitesh
console.log(course["courseInstructor"]);//hitesh

//but if we want to make our code clean i.e if we are printing the values of object more number of times it becomes clumpsy so we use below
// const {courseInstructor}= course
// console.log(courseInstructor);//hitesh
//or
const {courseInstructor:a}=course
console.log(a);//hitesh


//Api means we get some values from backend 
//before it is in XML structure which is complex now we get the values in jSON form
//below is json form
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//sometimes we get the api in arrays form also i.e
// [
//     {},
//     {},
//     {}
// ]

//so we get the apis in this form so what to do now ,to get them 
//we should know how to fetch the data in javascript (i.e call the required url and in response we get the data) after getting the data convert it to objects and access them
