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





