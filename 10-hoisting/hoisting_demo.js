console.log(a);
var a = 10; // undefined

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
/*
 * similar to var, let will hoisted, but it is not initialized immediately.
 * so it will return ReferenceError
*/

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
/*
* same situation as of let
*/

greet();
function greet(){
    console.log("Welcome to JS");
}

// sayMyName(); // ReferenceError: Cannot access 'sayMyName' before initialization
let sayMyName = function () {
    console.log("Dinesh");
}
/*
 * This function is declared to a variable so,
 *  let will hoisted, but it is not initialized immediately.
 * so it will return ReferenceError
*/

// displayName(); // TypeError: displayName is not a function 
var displayName = function (){
    console.log("Display Function")
}
/*
 * displayName is hoisted as a variable and initialized
 * with undefined.
 *
 * When displayName() is executed before the assignment,
 * JavaScript tries to execute undefined as a function,
 * resulting in:
 *
 * TypeError: displayName is not a function
 */