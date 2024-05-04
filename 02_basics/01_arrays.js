// array
//arrays are used to store multiple items in a single variable .arrays are objects
//Javascript arrays are resizable and can contain mix of different datatypes
//arrays follow zero based indexing
const myArr = [0, 1, 2, 3, 4, 5] 

// it can also be mixed like(need not to contain only same datatype elements,it can contain data of multiple types)
const myArr2=[0,1,"Suraj",true,4,5]
//different ways to declare arrays
const myHeors = ["shaktiman", "naagraj"]
const myArr3 = new Array(1, 2, 3, 4)

//arrays are accessed as
// console.log(myArr2[2]);

//Javascript array-copy operations create shallow copies
//A shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

// Array methods
const a=[1,2,3,4,5]

// a.push("suraj")
// a.push("bhai")
// console.log(a);

// a.pop()//doesnt takes any argument removes last value
// console.log(a);

// a.unshift(9)//(inserted the value 9  at starting of an array)but if we have 10000 elements it shifts all the 10000 elements which is time consuming process(computer get loads which is not good)
// a.shift()//removes the first value
// console.log(a);

// console.log(a.includes(9));//false
// console.log(a.indexOf(9));//-1
// console.log(a.indexOf(3));//2

// const b=a.join(); //returns an array with type string (join all the elements present at a to b)
// console.log(a);//[ 1, 2, 3, 4, 5 ]
// console.log(b); //1,2,3,4,5
// console.log(typeof b);



// slice, splice 
console.log("A ", myArr);//A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3)//(indexing starts from 0) //excludes last index
console.log(myn1);//[ 1, 2 ] 

console.log("B ", myArr);//B  [ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1, 3)//(indexing starts from 0) //includes last index & remove elements from index 1 to 3 in myArr
console.log("C ", myArr);//C  [ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]

//*** slice doesnt change the array and extracts values from array and excludes the last index
//*** splice changes the array(remove elements) extract the values which are removed and includes last element

