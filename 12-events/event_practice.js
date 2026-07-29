let text = document.getElementById("title")
let btn = document.getElementById("changeTextBtn")

btn.addEventListener("click",changeText)

function changeText(){
    text.innerHTML = "Welcome to JavaScript"
}

let para = document.getElementById("message")
let btn1 = document.getElementById("colorBtn")

btn1.addEventListener("click",changeColor)

function changeColor(){
    para.style.color = "green"
}

let userName = document.getElementById("username")

userName.addEventListener("input",() => {
    console.log(userName.value)
})

let box = document.getElementById('box')

box.addEventListener("mouseenter",() => {
    document.body.style.backgroundColor = "yellow"
})
box.addEventListener("mouseleave",() => {
    document.body.style.backgroundColor = "white"
})

let search = document.getElementById("search")
search.addEventListener("keypress",() => {
    console.log("Key Pressed")
})