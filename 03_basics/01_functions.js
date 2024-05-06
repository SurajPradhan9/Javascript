// console.log("S");
// console.log("U");
// console.log("R");
// console.log("A");
// console.log("J");

//we want to print the above more 10 times so it will be a problem so use functions i.e write once and when we want to use them call them

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}
// sayMyName()//calling function // if we write only sayMyName it is reference if we write sayMyName() means it executes


// function addTwoNumbers(number1, number2){ //number 1 and number 2 are parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(2,4)//2 and 4 are arguments


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ",result);



// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())//undefined just logged in
// console.log(loginUserMessage("hitesh"))//hitesh just logged in


function loginUserMessage(username="suraj"){
    if(!username){//(username==undefined) both are same
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())//suraj just logged in //if in parameters i would'nt keep suraj the output would be //PLease enter a username \n undefined
// //Note: In javascript "" and undefined are false values
// console.log(loginUserMessage("hitesh"))//hitesh just logged in//overrides suraj





// function calculateCartPrice(...num1){//... is rest operator same we write for spread opertor but we use them depending upon use case
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))//[ 200, 400, 500, 2000 ] we are using rest operator so we got output in array format




function calculateCartPrice(val1,val2 ,...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))//we are returning only num1 in function but in function parameters we have 2 parameters before num1 so the first 2 values we are unable to see in output//[ 500, 2000 ]
// //i.e 200 is assigned val1 ,400 is assigned to val2 and rest is assigned to num1



//creating a object and passing it to function
const user = {
    username: "Suraj",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)//Username is Suraj and price is undefined // we got undefined because we use different names i.e for prices  we kept price in function


// //the same can be written as
// handleObject({
//     username: "bhai",
//     price: 399
// })//Username is bhai and price is 399




//creating an array and passing it to function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));