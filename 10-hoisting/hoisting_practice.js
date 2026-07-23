// Exercise 1
console.log(a);
var a = 10; // undefined

// Exercise 2
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
/*
 * let is hoisted but remains in the
 * Temporal Dead Zone (TDZ) until its declaration
 * is executed. Accessing it before initialization
 * throws a ReferenceError.
 */

// Exercise 3
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
/*
* same situation as of let
*/

// Exercise 4
greet();
function greet(){
    console.log("Welcome to JS");
}

// Exercise 5
// sayMyName(); // ReferenceError: Cannot access 'sayMyName' before initialization
let sayMyName = function () {
    console.log("Dinesh");
}
/*
 * This function is declared to a variable so,
 *  let will hoisted, but it is not initialized immediately.
 * so it will return ReferenceError
*/