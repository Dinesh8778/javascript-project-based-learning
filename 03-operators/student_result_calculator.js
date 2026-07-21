let name = "Dinesh";
let tamilMark = 70;
let englishMark = 75;
let mathsMark = 85;
let scienceMark = 80;
let socialMark = 60;

let totalMarks = tamilMark + englishMark + mathsMark + scienceMark + socialMark;
let avgMarks = totalMarks / 5;

let pass = (tamilMark > 34 && englishMark > 34 && mathsMark > 34 && scienceMark > 34 && socialMark > 34);
let avg = avgMarks >= 75;

let merit = pass && avg;

console.log("Name : ",name);
console.log("Tamil Marks",tamilMark);
console.log("English Marks",englishMark);
console.log("Maths Marks",mathsMark);
console.log("Science Marks",scienceMark);
console.log("Social Marks",socialMark);
console.log("Total Marks : ",totalMarks);
console.log("Average Mark : ",avgMarks);
console.log("All pass status : ",pass);
console.log("Good Average : ",avg);
console.log("Merit certificate status : ",merit);
