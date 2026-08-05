const employee = {
    id : 101,
    name : "Dinesh",
    department : "IT",
    designation : "Developer",
    salary : 50000,
    city : 'Karur'
}

const {
    id, 
    name, 
    department, 
    designation, 
    salary, 
    city, 
    country = "India"
} = employee;

document.getElementById('result-display').innerHTML = `
<hr>
    <h3>Employee Details</h3>
    <hr>

    <table>
        <tr>
            <td>ID</td>
            <td>: ${id}</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>: ${name}</td>
        </tr>
        <tr>
            <td>Departmnet</td>
            <td>: ${department}</td>
        </tr>
        <tr>
            <td>Designation</td>
            <td>: ${designation}</td>
        </tr>
        <tr>
            <td>Salary</td>
            <td>: ₹${salary}</td>
        </tr>
        <tr>
            <td>City</td>
            <td>: ${city}</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>: ${country}</td>
        </tr>
    </table>
    <hr>

`