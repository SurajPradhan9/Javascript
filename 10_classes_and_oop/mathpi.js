// console.log(Math.PI);//3.14
// Math.PI = 5
// console.log(Math.PI);//3.14(doesnt overrides gives same output) 


const descripter = Object.getOwnPropertyDescriptor(Math, "PI") //gives the hiden details
// console.log(descripter);
// o/p:
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
//so if we overide also our value will not change beacuse writable is false



//we can also give and change our own object properties like this
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}




