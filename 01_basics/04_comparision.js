// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); //true (automatically javascript converted the type string to number)
// console.log("02" > 1); //true

// when you are comparing the values of 2 different datatypes the result is unpredicatable
// when you are comparing 2 values note that the datatypes of 2 values same

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true
// the reason is that an equality check == and comparisions ><>=<= work differently.
// comparisons convert null to a number ,treating it as zero.
// that's why (3) null>=0 is true and (1) null>0 is false

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false
//when you compare with undefined the value is always false

//try to avoid above 6 (types of comparisons) consoles

// === (strict check)also checks the datatype so result is false
console.log("2" === 2);//false

