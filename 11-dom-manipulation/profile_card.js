let name = document.getElementById("name")
name.textContent = "Dinesh Kumar"
let department = document.querySelector(".dept")
department.textContent = "IT"
let profile = document.getElementById("profile")
profile.alt = 'profile-image'
profile.src = "./profile.png"
let body = document.querySelector("body")
body.style.backgroundColor = 'aqua'
let newPara = document.createElement("h3")
newPara.innerHTML = "Profile Card"
body.appendChild(newPara)
let cgpa = document.getElementById("cgpa");
cgpa.textContent = "8.75";