const name = "suraj"
const repoCount = 50
console.log(name + repoCount + " Value");
//to concatenate values we use "+" "," the above console is not recommended and outdated 



// In todays date if you want to write use backticks (``)(also called as string interpolation) we use placeholders
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//the use of this is we can do lot of things on the go i.e we can change ${name } to ${name.toUpperCase} 



//one more method to declare strings is using objects (use new keyword)
const gameName=new String('Suraj-bhai-com')
console.log(gameName)//we get the output in the form of object with indexes from 0 (key value pairs)
//using this we get properties like length and lot of methods(inspect any page and in console write above 2 lines u will see methods in prototype) so we prefer declare strings using object



console.log(gameName[2])//r
console.log(gameName.length)//5
console.log(gameName.__proto__) // to access prototype so that to see the methods present in the prototype
console.log(gameName.toUpperCase());//SURAJ //it doesnt change the original value because string is of primitive type it create a duplicate and that duplicate value is changed to SURAJ
console.log(gameName)
console.log(gameName.charAt(2))//r
console.log(gameName.indexOf('r'));//2

let newName=gameName.substring(0,3) // we cannot give negative values in substring but we can give in slice
console.log(newName);

let anotherName=gameName.slice(-5,2)
console.log(anotherName);

const newStringOne = "   suraj    "
console.log(newStringOne);
console.log(newStringOne.trim());//remove spaces from begining and end

const url = "https://hitesh.com/hitesh%20choudhary" //if we give spaces in our url browser doesnt understand spaces and encode the spaces in url to %20 so if we want to remove it we use method
console.log(url);
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('suraj'))

console.log(gameName.split('-'));


