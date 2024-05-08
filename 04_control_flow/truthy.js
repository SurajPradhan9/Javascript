const userEmail = [] //for empty array->true // for empty string ->false //if string->true
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values - the values except falsy values all are truthy values
// "0", 'false', " ", [], {}, function(){}


//if we want to check array is empty or not
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//checking object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) { //here Object.keys(emptyObj) returns an array so we used .length===0 after that
    console.log("Object is empty");
}

// Note : false==0 //true
//         false==''//true
//         0==''//true


// Nullish Coalescing Operator (??)-> works only on null and undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



