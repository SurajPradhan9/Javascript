// Immediately Invoked Function Expressions (IIFE)
// (meaning is after writing the function immendiately execute it)
//why we need a function that should immediately execute
//case 1: if we have a file which has database connection and we want, when the appliaction starts then in that file our database connection should start
//case 2: sometimes we have some varibales declared globally and we dont want that varibales should make a problem in the function(as we know block scope can access  global variables i.e children can acess parents variables)

//this is the syntax to make iife
(function chai(){//// named IIFE because the function chai is a named iife it has name as chai
    console.log(`DB CONNECTED`);
})();

//()() think of like first parenthesis is function definition and second parentheseis is function call (as we write chai() ,chai is function and () this is calling ,we wrap chai inside(chai) and call it ())

//if interviewer asks what is iife (we should not only say the function which immediately excutes we should also say-> from global scope pollution we get problem sometimes so to remove that global scope variables or declaration or pollution we use iife)

//if we not end with semicolon and write one more iife we get error (becuase immediately invoke function is invoked but it doesn't know where to stop so we end with semicolon)
//so first iife should end to run next iife

( (name) => { //it doesnt has any name so it is not a named iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

