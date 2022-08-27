const form = document.querySelector("form");
// let inp1 = document.querySelector("#nom");
// let inp2 = document.querySelector("#prenom");
let inp3 = document.createElement("input");

// Ma méthode:

form.method = "GET";
// inp1.name = "nom";
// inp2.name = "prenom";
inp3.type = "submit";
inp3.value = "valeur";
form.appendChild(inp3);
// console.log(form);

// Méthode avec la boucle: 

let mesInputs = document.querySelectorAll('input');
for(let i = 0; i < mesInputs.length; i++){
    mesInputs[i].name= mesInputs[i].id;
}
