var btn1 = document.querySelector("#bP1");
var btn2 = document.querySelector("#bP2");
var btn3 = document.querySelector("#bP3");
var div1 = document.querySelector("#partie1");
var div2 = document.querySelector("#partie2");
var div3 = document.querySelector("#partie3");

partie2.classList.add("invisible");
partie3.classList.add("invisible");

btn1.addEventListener("click", () => {
  div1.classList.remove("invisible");
  partie2.classList.add("invisible");
  partie3.classList.add("invisible");
});
btn2.addEventListener("click", () => {
  div2.classList.remove("invisible");
  div1.classList.add("invisible");
  div3.classList.add("invisible");
});
btn3.addEventListener("click", () => {
  div3.classList.remove("invisible");
  div2.classList.add("invisible");
  div1.classList.add("invisible");
});
