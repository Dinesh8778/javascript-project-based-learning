function calculateTotal(tamilMark,englishMark,mathsMark,scienceMark,socialMark){
    return tamilMark + englishMark + mathsMark + scienceMark + socialMark;
}

function calculateAverage(totalMarks){
    return totalMarks / 5;
}

function checkPass(tamilMark,englishMark,mathsMark,scienceMark,socialMark){
    return (tamilMark > 34 && englishMark > 34 && mathsMark > 34 && scienceMark > 34 && socialMark > 34);
}

function calculateGrade(avgMarks, isPassed){
    if(!isPassed){
        return "Fail";
    }

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
    return grade;
}

function checkMerit(isPassed, avgMarks){
    return isPassed && avgMarks >= 90;
}

function displayResult(name,tamilMark,englishMark,mathsMark,scienceMark,socialMark,totalMarks,avgMarks,isPassed,grade,meritStatus){
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

}

let name = "Dinesh";
let tamilMark = 70;
let englishMark = 75;
let mathsMark = 85;
let scienceMark = 80;
let socialMark = 60;

let totalMarks = calculateTotal(tamilMark,englishMark,mathsMark,scienceMark,socialMark);
let avgMarks = calculateAverage(totalMarks);

let isPassed = checkPass(tamilMark,englishMark,mathsMark,scienceMark,socialMark);

let grade = calculateGrade(avgMarks, isPassed);

let meritStatus = checkMerit(isPassed,avgMarks);

displayResult(name,tamilMark,englishMark,mathsMark,scienceMark,socialMark,totalMarks,avgMarks,isPassed,grade,meritStatus)