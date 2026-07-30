
let attendance = 0;

const addStud = document.getElementById('add');
const removeStud = document.getElementById('remove');
const printResult = document.getElementById('print');
const displayResult = document.getElementById('result');

function updateAttendanceStatus() {
    if (attendance === 60) {
        displayResult.textContent = 'Class Full';
    } else if (attendance === 0) {
        displayResult.textContent = 'Class Empty';
    } else if (attendance > 40) {
        displayResult.textContent = 'High Attendance';
    } else if (attendance >= 20 && attendance <= 40) {
        displayResult.textContent = 'Normal Attendance';
    } else {
        displayResult.textContent = 'Low Attendance';
    }
}

addStud.addEventListener('click', () => {
    if (attendance < 60) {
        attendance++;
        removeStud.style.display = 'inline-block'; 
        updateAttendanceStatus();
        
        if (attendance === 60) {
            addStud.style.display = 'none';
        }
    }
});

removeStud.addEventListener('click', () => {
    if (attendance > 0) {
        attendance--;
        addStud.style.display = 'inline-block'; 
        updateAttendanceStatus();
        
        if (attendance === 0) {
            removeStud.style.display = 'none';
        }
    }
});

printResult.addEventListener('click', () => {
    displayResult.textContent = `Student present count is ${attendance}`;
});