
document.getElementById("calcuate").addEventListener('click', () => {
    const name = document.getElementById("name").value;
    const dept = document.getElementById("dept").value;
    const college = document.getElementById("college").value;
    const m1 = document.getElementById("m1").valueAsNumber;
    const m2 = document.getElementById("m2").valueAsNumber;
    const m3 = document.getElementById("m3").valueAsNumber;
    const total = m1+m2+m3;
    const avg = total / 3;
    const result = m1 >= 35 && m2 >= 35 && m3 >= 35;
    const m1Color = m1 < 35 ?"red":"black";
    const m2Color = m2 < 35 ?"red":"black";
    const m3Color = m3 < 35 ?"red":"black";
    const resultColor = result ? "black" : "red";
    document.getElementById("result").innerHTML = `
    <hr>
    <h2>Student Report Card</h2>
    <hr>
    <table>
        <tr>
            <td>Name </td>
            <td>: ${name}</td>
        </tr>
        <tr>
            <td>Department </td>
            <td>: ${dept}</td>
        </tr>
        <tr>
            <td>College </td>
            <td>: ${college}</td>
        </tr>
    </table>
    <h5>Marks</h5>
    <table>
        <tr>
            <td>M1 </td>
            <td style="color:${m1Color}">: ${m1}</td>
        </tr>
        <tr>
            <td>M2 </td>
            <td style="color:${m2Color}">: ${m2}</td>
        </tr>
        <tr>
            <td>M3 </td>
            <td style="color:${m3Color}">: ${m3}</td>
        </tr>
    </table>
    <br>
    <table>
        <tr>
            <td>Total </td>
            <td>: ${total}</td>
        </tr>
        <tr>
            <td>Average </td>
            <td>: ${avg}</td>
        </tr>
        <tr>
            <td>Result </td>
            <td style="color:${resultColor}">: ${result?"Pass":"Fail"}</td>
        </tr>
    </table>
    `
});