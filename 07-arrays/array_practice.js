// Exercise 1
let fruits = ["apple", "mango", "banana", "kiwi", "pineapple"];

console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

// Exercise 2
let nums = [10,20,30,40,50];
for(let i = 0 ; i < nums.length ; i++){
    console.log(nums[i]);
}

// Exercise 3
let language = ["Java","Python","JavaScript"];
console.log(language);
language.push("C++");
console.log(language);
language.pop();
console.log(language);

// Exercise 4
let arr = [2,4,6,8,10];
console.log(arr.length);
console.log(arr.includes(6));
console.log(arr.indexOf(8));

// Exercise 5
fruits = ["Apple","Banana","Orange"];
console.log(fruits);
fruits.unshift("Mango");
console.log(fruits);
fruits.shift();
console.log(fruits)