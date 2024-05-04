let score="9abc" // we know that the type can be number string etc
// const {score}=req.body; //we dont know what type the varibale score is,it can be string number and etc

//console.log(typeof score);//string
//console.log(typeof(score));//string
// both the above 2 consoles are same 2nd console is it in the form of method/function

let valueInNumber=Number(score)
//console.log(typeof valueInNumber);//number
//console.log(valueInNumber);//NaN (Not a number)
// "33" => 33
// "33abc" => NaN 
//  true => 1; false => 0
//  null=>0
//  undefined=> NaN
//   =>for all above  type is Number only
//the value of score is 9abc we know that it should not convert to a number,but it is converting to a number in javascript ,but we get the value as NaN (which is confusing)

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); //true
// 1 => true; 0 => false
// "" =>false 
// "suraj"=>true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " suraj"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2); //122 (first value is string so it is treated as string)
// console.log(1 + 2 + "2");//32

// console.log( (3 + 4) * 5 % 3);//2 (bracket one is executed first)

// console.log(true)//true
// console.log(+true)//1
// console.log(+"");//0

//not best practice
// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// console.log(++gameCounter);
// console.log(gameCounter++);
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion





