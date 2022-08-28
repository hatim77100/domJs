const parties = document.querySelectorAll(".partie");

// méthode 1:

// for(let i = 0; i<parties.length; i++){
//     parties[i].addEventListener("click",()=>{
//         parties[i].classList.toggle('selected');
//     })
// }

// méthode 2:

parties.forEach((partie) => {
    partie.addEventListener("click", () => {
    partie.classList.toggle("selected");
  });
});
