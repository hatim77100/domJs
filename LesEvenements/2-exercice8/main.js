const inputNom = document.querySelector("input[name='nom']");
const inputPrenom = document.querySelector("input[name= 'prenom']");
const span = document.getElementById("verif");
const option = document.getElementsByTagName("option");
const select = document.querySelector("select[name='niveau']");

// document.addEventListener("click", (event) => {
//   console.log(event);
// });

function changerBg(element) {
  element.style.backgroundColor = "green";
}

function elementBlur(element) {
  element.style.backgroundColor = "lightslategray";
}

function selection() {
  if (select.value == "") {
    span.style.display = "none";
  } else {
    span.style.display = "inline";
    span.textContent = `Êtes-vous sûr d'avoir un ${select.value} ?`;
    span.style.color = "red";
  }
}
