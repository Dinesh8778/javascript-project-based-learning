let college = "VSB Engineering College";

function showStudent(){
    let studentName = "Dinesh";
    let department = "IT";
    if (true){
        let cgpa = 8.05;
        console.log("College : ",college);
        console.log("Student Name : ",studentName)
        console.log("Department : ",department);
        console.log("CGPA : ",cgpa);
    }
    // console.log("CGPA : ",cgpa); // ReferenceError: cgpa is not defined

}
showStudent()
// console.log("Student Name : ",studentName); // ReferenceError: studentName is not defined
// console.log("Department : ",department); // ReferenceError: department is not defined