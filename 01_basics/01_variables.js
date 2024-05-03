const accountId=9104
let accountEmail="suraj@google.com"
var accountPassword="12345"
accountCity="Hyderabad" // we can also create a varibale without declaring type 
let accountState; //if you declare a varibale with empty initialization default value will be undefined

// accountId=2 // not allowed cannot be changed because accountId is declared as constant type
accountEmail="sv@sv.com"
accountPassword="91919191"
accountCity="Bengaluru"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope i.e if you created another varibale with same name with type var if you changed that variable,the varibales that are named with that name also changes so prefer using let
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])