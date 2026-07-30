// Exercise 1

let name = 'Dinesh';
let age = 20;
const college = 'VSBEC';

console.log(name)
console.log(age)
console.log(college)

// Exercise 2
let score = 8;
score += 10;
console.log(score);

// Exercise 3
const PI = 3.14;
// PI = 22/7; // TypeError: Assignment to constant variable.

// Exercise 4
{
    let a = 10;
    console.log(a); // 10
}
// console.log(a); // ReferenceError: a is not defined

// Exercise 5
const user = {
    name: "John"
};

user.name = "David";

console.log(user); // { name: 'David' }