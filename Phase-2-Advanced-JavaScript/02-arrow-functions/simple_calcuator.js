const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");

let ans;

function display(num){
    result.textContent = `Result is ${num}`;
}

add.addEventListener('click',() => {
    ans = Number(a.value) + Number(b.value);
    display(ans);
})
sub.addEventListener('click',() => {
    ans = Number(a.value) - Number(b.value);
    display(ans);
})
mul.addEventListener('click',() => {
    ans = Number(a.value) * Number(b.value);
    display(ans);
})
div.addEventListener('click',() => {
    if(Number(b.value) == 0){
        result.textContent = "/ by 0 Error";
    }
    else{
    ans = Number(a.value) / Number(b.value);
    display(ans);
    }
})

