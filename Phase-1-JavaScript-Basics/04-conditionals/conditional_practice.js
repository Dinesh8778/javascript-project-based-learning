let age = 20;
if(age >= 18){
    console.log("Eligible to VOTE");
} else {
    console.log("NOT Eligible to Vote");
}

let number = 25;
if(number > 0){
    console.log("Positive number");
} else if(number < 0){
    console.log("Negative number");
} else {
    console.log("Zero");
}

let marks = 84;

if(marks > 90){
    console.log("A");
} else if(marks >= 75){
    console.log("B");
} else if(marks >= 50){
    console.log("C")
} else {
    console.log("Fail");
}

let day = 6;

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid")
}

let isLoggedIn = true;
console.log(isLoggedIn?"Welcome":"Please Login");