// Exercise 1
let student = {
    name : "Dinesh",
    age :20,
    department : "IT",
    cgpa : 8.05
};
console.log(student);

// Exercise 2
student.cgpa = 7.5;
console.log(student);

// Exercise 3
student.city = "Karur";
console.log(student);

// Exercise 4
delete student.city;
console.log(student);

// Exercise 5
let car = {
    brand : "Tata",
    model : "Sumo",
    price : 100000
}

for(let key in car){
    console.log(key," : ",car[key]);
}