/***************************************************************

Fichier principal avec les fonctions primitives du site

***************************************************************/
/* Déclarations variables */

let = mouseCursor = document.querySelector(".cursor");
let = navLinks = document.querySelectorAll(".nav-links li, .select");
let height_box = document.getElementById("box").offsetHeight;
let x = 0;

/***************************************************************/
/* Fonction Initialisation/refresh */

window.onload = init;

function init(){
  verif_bg();
  verif_visibilityButton();
}

/***************************************************************/
/* Mouvement souris listener */

window.addEventListener("mousemove",cursor);
window.addEventListener("mousemove",cursorColor);

/***************************************************************/
/* Cliks listener */

document.getElementById("down").addEventListener("click",  down);
document.getElementById("up").addEventListener("click",  up);

/***************************************************************/
/* Fonction souris */

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

/***************************************************************/
/* Fonction DownButton */

function down(){
  x++;
  document.getElementById("box").scrollBy(0, height_box);
  verif_bg();
  ButtonDebug();
}

/***************************************************************/
/* Fonction UpButton */

function up(){
  x--;
  document.getElementById("box").scrollBy(0, -height_box);
  verif_bg();
  ButtonDebug();
}

function cursorColor(){
  if(x == 2){
    document.getElementById("cursor").classList.replace("ccolor","ccolorCV");
  }
  else{
    document.getElementById("cursor").classList.replace("ccolorCV","ccolor");
  }
}
