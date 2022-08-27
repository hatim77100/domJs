let header = document.querySelector("header");
let title = document.querySelectorAll("h2");
let paragraphe = document.querySelectorAll("p");

header.style.display = "none";
document.body.style.border = "4px solid black";

for(let i = 0; i<title.length; i++){
    title[i].style.border = "2px solid black";
    title[i].style.borderRadius = "10px";
    title[i].style.color = "green";
}

for(let i = 0; i < paragraphe.length; i++){
    paragraphe[i].style.color = "blue";
}

