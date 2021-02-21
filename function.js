/***************************************************************/
/* Clicks listener */

document.getElementById("ld-page").addEventListener("click", go_ld_page);
document.getElementById("acceuil").addEventListener("click", go_acceuil);
document.getElementById("cv").addEventListener("click", go_cv);
document.getElementById("rea").addEventListener("click", go_rea);
document.getElementById("contact").addEventListener("click", go_contact);

/***************************************************************/
/* Fonction scroll vers page des liens de la nav-bar */

function go_ld_page() {
  document.getElementById("bal-page1").scrollIntoView();
  x = 0;
  verif_bg();
  ButtonDebug();
}
function go_acceuil() {
  document.getElementById("bal-page2").scrollIntoView();
  x = 1;
  verif_bg();
  ButtonDebug();
}
function go_cv() {
  document.getElementById("bal-page3").scrollIntoView();
  x = 2;
  verif_bg();
  ButtonDebug();
}
function go_rea() {
  document.getElementById("bal-page4").scrollIntoView();
  x = 3;
  verif_bg();
  ButtonDebug();
}
function go_contact() {
  document.getElementById("bal-page5").scrollIntoView();
  x = 4;
  verif_bg();
  ButtonDebug();
}

/***************************************************************/
/* Fonction adaptation background par rapport à la valeur de x */

function verif_bg(){
  switch(x){
    case 0:
      document.body.classList.remove("bg-active-page2");
      document.body.classList.remove("bg-active-page3");
      document.body.classList.remove("bg-active-page4");
      document.body.classList.remove("bg-active-page5");
      document.body.classList.add("bg-active-page1");
    break;
    case 1:
      document.body.classList.add("bg-active-page2");
      document.body.classList.remove("bg-active-page3");
      document.body.classList.remove("bg-active-page4");
      document.body.classList.remove("bg-active-page5");
      document.body.classList.remove("bg-active-page1");
    break;
    case 2:
      document.body.classList.remove("bg-active-page2");
      document.body.classList.add("bg-active-page3");
      document.body.classList.remove("bg-active-page4");
      document.body.classList.remove("bg-active-page5");
      document.body.classList.remove("bg-active-page1");
    break;
    case 3:
      document.body.classList.remove("bg-active-page2");
      document.body.classList.remove("bg-active-page3");
      document.body.classList.add("bg-active-page4");
      document.body.classList.remove("bg-active-page5");
      document.body.classList.remove("bg-active-page1");
    break;
    case 4:
      document.body.classList.remove("bg-active-page2");
      document.body.classList.remove("bg-active-page3");
      document.body.classList.remove("bg-active-page4");
      document.body.classList.add("bg-active-page5");
      document.body.classList.remove("bg-active-page1");
    break;
  }
}

/***************************************************************/
/* Fonction verif pour afficher ou non bouton up/down par rapport à x */

function verif_visibilityButton(){
  switch(x){
    case 0:
      document.getElementById("up").style.visibility="hidden";
      document.getElementById("down").style.visibility="visible";
    break;
    case 1:
      document.getElementById("up").style.visibility="visible";
      document.getElementById("down").style.visibility="visible";
    break;
    case 2:
      document.getElementById("up").style.visibility="visible";
      document.getElementById("down").style.visibility="visible";
    break;
    case 3:
      document.getElementById("up").style.visibility="visible";
      document.getElementById("down").style.visibility="visible";
    break;
    case 4:
      document.getElementById("up").style.visibility="visible";
      document.getElementById("down").style.visibility="hidden";
    break;
  }
}

/***************************************************************/
/* [NOTES] Activation de "verif_visibilityButton()" par délai avec "ButtonDebug" car sans cela l'utilisateur peut double clique sur les up/down ce qui provoque un bug d'affichage entre les pages
Dorénavant après un clique sur up/down, les bouttons disparaissent l'instant de [setTimeout] laissant le temps au défilement des pages */

function ButtonDebug(){
  document.getElementById("down").style.visibility="hidden";
  document.getElementById("up").style.visibility="hidden";
  setTimeout(verif_visibilityButton, 1500);
}
