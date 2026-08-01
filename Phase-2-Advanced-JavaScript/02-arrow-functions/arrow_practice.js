// Exercise 1
let greet = name => {
    return `Hello ${name}`;
}

console.log(greet("Dinesh"))

// Exercise 2
let square = n => n*n;
console.log(square(2));

// Exercise 3
let isEven = n => n%2===0;
console.log(isEven(7));
console.log(isEven(10));

// Exercise 4
let max = (a,b) => a<b?b:a;
console.log(max(4,3));

// Exercise 5
let len = str => str.length;
console.log(len("Dinesh"));