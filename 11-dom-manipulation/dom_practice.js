let title = document.getElementById("title");
title.textContent = "Welcome to JS";

let message = document.querySelector(".message");
message.style.color = "blue";
message.style.fontSize = "24px";

let image = document.getElementById("logo");
image.src = "./passport.jpg";
image.alt = "test-image";

let para = document.createElement("p");
para.textContent = "This paragraph was created using JavaScript.";
document.body.appendChild(para);

let del = document.getElementById("removeMe");
del.remove();