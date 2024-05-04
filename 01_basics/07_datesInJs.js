// Dates
//Dates are calculated in millisecond from jan1 1970

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//object

let myCreatedDate = new Date(2025, 0, 9)//(year,month,date)
// console.log(myCreatedDate.toDateString());//Thu Jan 09 2025

let myCreatedDate1 = new Date(2025, 0, 9,5,3)//(year,month,date,hr,min)
// console.log(myCreatedDate1.toLocaleString());//1/9/2025, 5:03:00 AM

let myCreatedDate2 = new Date("2025-01-09") //(yy-mm-dd)
// console.log(myCreatedDate2.toLocaleString())//1/9/2025, 12:00:00 AM


let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1714825267633 //Dates are calculated in millisecond from jan1 1970
// console.log(myCreatedDate2.getTime());//1736380800000 value from 1st jan 1970 to 9 jan 2025
// console.log(Math.floor(Date.now()/1000));//1714825935//milliseconds to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//+1 because month starts from 0
console.log(newDate.getDay());
console.log(newDate.toLocaleString());

// `${newDate.getDay()} and the time `

//used to customize
const formattedDate=newDate.toLocaleString('default', {
    weekday: "long",
    hour:"numeric"
})
console.log(formattedDate);