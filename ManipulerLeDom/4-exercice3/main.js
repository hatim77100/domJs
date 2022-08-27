
var monForm = document.createElement("form");
let params = new URLSearchParams(document.location.search);
let age = params.get("age");
let text = document.createElement("p");

if (age != null) {
    monForm.innerHTML = "<label>Quel est votre age ? </label>\n";
    monForm.innerHTML += "<input type='number' name='age' />\n";
    monForm.innerHTML += "<input type='submit' value='Valider' />\n";
    document.querySelector("#partie3").insertAdjacentElement("beforebegin", monForm);
    document.querySelector("form").append(text);
    text.textContent = "L'âge est de " + age + " ans";
// } else if(age == 0) {
//     text.textContent = "choisir vôtre âge";
}

// document.querySelector("#partie3").appendChild(monForm);

