function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5));//25
console.log(multipleBy5.power);//2
console.log(multipleBy5.prototype);//{}
//In Javascript everything is consider as object (function is also a function and function is also a object)