var baliseP = document.createElement("p");
baliseP.innerHTML ="voici un texte";
// document.querySelector("#partie3").insertBefore(baliseP, document.querySelector("#partie3 p"));
document.querySelector("#partie2").insertAdjacentElement("beforebegin", baliseP);