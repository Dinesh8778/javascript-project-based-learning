let para = document.getElementById("colour");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let reset = document.getElementById("reset");

red.addEventListener("click",() => {
    document.body.style.backgroundColor = "red";
    para.innerHTML = "<strong>Current Color : Red</strong>";
})
blue.addEventListener("click",() => {
    document.body.style.backgroundColor = "blue";
    para.innerHTML = "<strong>Current Color : Blue</strong>";
})
green.addEventListener("click",() => {
    document.body.style.backgroundColor = "green";
    para.innerHTML = "<strong>Current Color : Green</strong>";
})
reset.addEventListener("click",() => {
    document.body.style.backgroundColor = "white";
    para.innerHTML = "<strong>Current Color : White</strong>";
})