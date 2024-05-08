const coding = ["js", "ruby", "java", "python", "cpp"]

// //forEach loop is a property for arrays
// coding.forEach( function (val){ //forEach loop contains callback function and callback function doesnt contains name
//     console.log(val);
// } )


//2nd variation of forEach loop
// coding.forEach( (item) => {
//     console.log(item);
// } )


//3rd variation of forEach loop
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)//note we are passing reference

//forEach loop also contains different values in function parameters(hover on forEach and see for reference)
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

//using forEach for [{}, {}, {}]
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )