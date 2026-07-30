function greet(){
    console.log("Welcome to JavaScript");
}

function printSquare(number) {
    return number ** 2;
}

function add(a,b){
    return a+b;
}

function isEvenOrOdd(number){
    return number%2 === 0 ? "Even" : "Odd";
}

function findLargest(a,b){
    return a>b ? a : b;
}

for(let i = 0 ; i <= 2 ; i++){
    greet();
}

console.log(printSquare(5));
console.log(printSquare(10));
console.log(printSquare(15));

let result = add(5,7);
console.log(result);

console.log("8 is ",isEvenOrOdd(8));
console.log("15 is ",isEvenOrOdd(5));
console.log("22 is ",isEvenOrOdd(22));

console.log(findLargest(10,25));
console.log(findLargest(5,2));
console.log(findLargest(5,5));