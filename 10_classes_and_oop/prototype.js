//1
// //Our task
// let myName = "suraj     "
// let mychannel = "chai     "
// console.log(myName.length);//it is giving 10 but we want 5 beacuse they are 5 letters only we dont want to add the count of those spaces
// //now we know if we dont want the spaces we can use trim() function i.e
// console.log(myName.trim().length);//it is giving what we need i.e output 5 but we want to create our own function i.e trueLength to give the output 5 beacuse every time we cant write myName.trim().length (which is big Note:for our understanding)
// console.log(myName.trueLength);//undefined


//2
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.suraj = function(){
    console.log(`suraj is present in all objects`);
}

Array.prototype.heySuraj = function(){
    console.log(`Suraj says hello`);
}

heroPower.suraj();//gives output
myHeros.suraj();//gives output because array also passes through object prototype
//but if we add properties to array (if we access through an object it will give error (refer screenshot))
myHeros.heySuraj()//gives output
heroPower.heySuraj()//error (refer screenshot i.e function array string all passes through object if we add properties to object everyone can access it, but if we give property to array, only it can access it,string function object cannot access it)

//3




