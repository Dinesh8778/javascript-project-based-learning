// Exercise 1
let college = "VSBEC";

function print(){
    console.log(college);
}
print();
console.log(college);

// Exercise 2
function showMessage(){
    let message = "Hello JavaScript";
    console.log(message);
}
showMessage();
// console.log(message); ReferenceError: message is not defined

// Exercise 3
if(true){
    let city = "Karur";
}
// console.log(city); //ReferenceError: city is not defined

// Exercise 4
let name = "DK";
function displayName(){
    let name = "Dinesh";
    console.log("Name isside function",name);
}
displayName();
console.log("Name outside function",name);

// Exercise 5
let number = 10;
function fun1(){
    let num = 20;
    function fun2(){
        let n = 30;

        console.log(number);
        console.log(num);
        console.log(n);
    }

    fun2();
}
fun1();


