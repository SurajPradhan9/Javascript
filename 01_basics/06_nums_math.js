const score=900
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)//first it is converted to string then we found the length of that string

const balance1=new Number(500)
// console.log(balance1.toFixed(2));//500.00 (gives 2 decimal values)

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));//124 - gives the precise value according the number placed inside function i.e 3 if it is 4 then it will give 123.9 //priority is given to values before decimal
// console.log(otherNumber.toPrecision(4))//123.9 
// console.log(otherNumber.toPrecision(5))//123.90


const otherNumber1 = 1123.8966
// console.log(otherNumber1.toPrecision(3))//1.12e+3 - 3 is smaller then the defined value it is giving in exp form

const hundreds = 1000000
//for better representation of zeros we use this method
// console.log(hundreds.toLocaleString('en-IN'));//bydefault it is in us standard(1,000,000) so we are specifying in 'en-IN'(10,00,000)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random()); // always Math.random value gives output between 0 and 1
console.log(Math.random()*10); //if we multiply by 10 (if we have 0.83 1 bit is shifted to left i.e 8.3)
console.log((Math.random()*10) + 1);//value can be 0 0r 0.01 so for this case we add +1 to it
console.log(Math.floor(Math.random()*10) + 1); // we want only the floor value i.e 4.1333=>4
// the above 4 consoles gives values between 1 to 9 only because we have multiplied by 10 so that 0.833 gives 8.3 so 8 ..


//if we want random numbers between particular range we do
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
