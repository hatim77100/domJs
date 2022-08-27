let img = document.querySelector('img');
let titre = document.querySelector("h1");
let text = document.createElement("p");
img.remove();
document.querySelector("body main").replaceChild(text, titre);

let parties = document.querySelectorAll(".partie");

//  première mmethode :
// for( let i = 0; i < parties.length; i++){
//     let nouveauTitre = document.createElement("h3");
//     var baliseH2 = parties[i].querySelector("h2");
//     text.textContent = "un texte";
//     nouveauTitre.textContent = "Titre de niveau 3";
//     nouveauTitre.style.color = "green";
//      parties[i].replaceChild(nouveauTitre, baliseH2)
// };

//  Deuxième méthode :

let nouveauTitre = document.createElement("h3");
text.textContent = "un texte";
nouveauTitre.textContent = "Titre de niveau 3";
nouveauTitre.style.color = "green";

for( let i = 0; i < parties.length; i++){
    var dupNode = nouveauTitre.cloneNode(true);
    var baliseH2 = parties[i].querySelector("h2");
     parties[i].replaceChild(dupNode, baliseH2);
};