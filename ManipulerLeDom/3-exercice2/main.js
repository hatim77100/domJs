let formulaire = document.createElement("form");
let label = document.createElement("label");
let input1 = document.createElement("input");
let input2 = document.createElement("input");

    formulaire.method = "GET";
    label.textContent = "Quel est votre age ? ";
    input1.type = "number";
    input1.name = "age";    
    input2.type = "submit";
    input2.value = "vaider";

// let form = document.querySelector("#partie3").insertAdjacentElement("beforeend", formulaire);
let form = document.querySelector("#partie3").insertAdjacentElement("beforebegin", formulaire);
form.appendChild(label);
form.appendChild(input1);
form.appendChild(input2);



