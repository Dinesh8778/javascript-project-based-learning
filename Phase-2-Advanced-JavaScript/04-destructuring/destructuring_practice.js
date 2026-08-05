// Exercise 1
const student = {
    name : "Dinesh",
    age : 20,
    department : "IT"
};

const {name, age, department} = student;

console.log(name);
console.log(age);
console.log(department);

// Exercise 2
const laptop = {
    brand : "Lenovo",
    price : 55000,
    ram : 16
};

const{brand:laptopBrand, price, ram} = laptop;

console.log(laptopBrand);
console.log(price);
console.log(ram);

// Exercise 3
const details = {Name : "DK"};

const {Name, city = "Karur" } = details;
console.log(Name);
console.log(city);

// Exercise 4
const color = ["Red", 'Green', 'Blue', 'Yellow'];
const [first,,third] = color;
console.log(first);
console.log(third);

// Exercise 5
const numbers = [100,200,300,400];
const [one,,three,four] = numbers;

console.log(one);
console.log(three);
console.log(four);