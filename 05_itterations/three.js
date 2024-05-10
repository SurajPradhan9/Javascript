// for of


// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}



const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}



// Maps //contains unique elements (doesnt contain duplicates and remember order of insertion)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//we can itterate over maps



//we cannot itterate objects
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);//error //myObject is not iterable
    
// }