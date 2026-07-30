let marks = [78, 85, 92, 67, 88];

for(let i = 0 ; i < marks.length ; i++){
    console.log(marks[i]);
}

let min = marks[0];
let max = marks[0];
let totalMarks = 0;

for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] < min) min = marks[i];
    if(marks[i] > max) max = marks[i];
    totalMarks += marks[i];
}

let avgMarks = totalMarks / marks.length;

console.log("Max mark ",max);
console.log("Min mark ",min);
console.log("Total mark ",totalMarks);
console.log("Average mark ",avgMarks);
console.log("92 is",marks.includes(92)?"Present":"Not Present");
console.log("Index of 67 is ",marks.indexOf(67));

marks.push(50);
console.log("After pushing 50 :",marks);
marks.pop()
console.log("After popping :",marks);