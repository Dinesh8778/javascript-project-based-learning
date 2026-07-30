let student = {
    name : "Dinesh",
    age : 20,
    department : "IT",
    college : "VSBEC",
    cgpa : 8.025,
    isHosteller : true
};

for(let i in student){
    console.log(i," : ",student[i]);
}

student["cgpa"] = 8;
console.log(student);

student.phoneNumber = "8778169902";
console.log(student);

delete student["phoneNumber"];
console.log(student);

for(let i in student){
    console.log(i," : ",student[i]);
}
