let name = "Dinesh";
let tamilMark = 70;
let englishMark = 75;
let mathsMark = 85;
let scienceMark = 80;
let socialMark = 60;

let totalMarks = tamilMark + englishMark + mathsMark + scienceMark + socialMark;
let avgMarks = totalMarks / 5;

let isPassed = (tamilMark > 34 && englishMark > 34 && mathsMark > 34 && scienceMark > 34 && socialMark > 34);

let meritStatus = isPassed && avgMarks >= 90;

let grade;

if(avgMarks >= 90){
    grade = 'A';
} else if(avgMarks >= 75){
    grade = 'B';
} else if(avgMarks >= 50){
    grade = 'C';
} else {
    grade = "Fail";
}
grade = isPassed?grade:"Fail";

console.log("Name : ",name);
console.log("Tamil Marks",tamilMark);
console.log("English Marks",englishMark);
console.log("Maths Marks",mathsMark);
console.log("Science Marks",scienceMark);
console.log("Social Marks",socialMark);
console.log("Total Marks : ",totalMarks);
console.log("Average Mark : ",avgMarks);
console.log("Pass Status : ",isPassed?"All Pass":"Fail");
console.log("Grade : ",grade)
console.log("Merit certificate status : ",meritStatus?"Eligible":"Not Eligible");
