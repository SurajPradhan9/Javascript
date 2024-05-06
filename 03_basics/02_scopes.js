// let a=10
// const b=20
// var c=30
// console.log(a);//10
// console.log(b);//20
// console.log(c);//30


//{} curly braces (scope) eg:in functions ,if-else (but objects curly braces are different they are for object declaration)


// if (true) {
//     let a = 10
//     const b = 20
//     var c=30
// }
// console.log(a);//a is not defined
// console.log(b);//b is not defined
// console.log(c);//30
//a b c are inside if block (scope) so we can see that if we are accessing a b c (we can access c because it is var but we cannot access a and b). so we prefer let


//let say if we are declaring using var ,outside the scope with  value var c=300 , after that if we are declaring the var inside scope with var c=30, if we are printing the value c outside the scope , we get output as 30 , but we should get 300 which is a problem so we should use let because in a particular scope it is accessible in that scope only unlike var if we declare outside and inside, it overrides the variable (if we will not keep anything like c=30 it will also overrides so dont use var and empty which is c=30)

//data inside a block like above if condition, data is block scope ,data outside the if condition are called global scope , and global scope data are accessible by block scope but block scope data should'nt be accessible by global scope (so we should mot prefer var)


// let a=10;
// if(true){
//     let a=20;
//     console.log("inner ",a);//20
// }
// console.log("outer ",a);//10
// //so prefer using let, because it specifies block scope and global scope separately



// let array=[1,2,3]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];//we can access i inside the loop
// }
// console.log(i);// we cannot access i outside for loop // but we can access i inside the loop


//difference between global scope in windows and node
//In windows if we check the scope it is different and in node if check global scope it is different



// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);//website is not defined
//      two()

// }
// one()
// //if we have nested functions the child function can access parent function properties but parent function cannot access child function properties(this is called as closure)


// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//It is a function
console.log(addone(5))//we can access before initialization
function addone(num){
    return num + 1
}
console.log(addone(5))//we are writing this console.log(addone(5)) here , we can write the same on line 80 i.e before creating function ,and also it doesnt give us any error



//function can be written like this also called as expression
console.log( addTwo(5))//error //Cannot access 'addTwo' before initialization , because the function is stored in a variable
//this problem comes when, how we declare functions i.e in above we only declared a function but in below we declared and stored in a variable (furthur we get a concept called hoisting that how function are declared and more on)
const addTwo = function(num){
    return num + 2
}
console.log( addTwo(5))//we are writing this console.log(addTwo(5)) here , we cannot write the same on line 89 i.e before creating function because it gives error