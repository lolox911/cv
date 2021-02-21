/* function bgChange(){
  if (this.onscroll > this.innerHeight/4) {
    document.body.classList.add("bg-active");
  }else{
    document.body.classList.remove("bg-active");
  }
}
window.addEventListener("scroll", bgChange); */


/*document.getElementById("box").scrollTo(0, 500);*/


let = mouseCursor = document.querySelector(".cursor");
let = navLinks = document.querySelectorAll(".nav-links li, .select");

window.addEventListener("mousemove",cursor);

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

/* DOWN FONCTION */
var height_box = document.getElementById("box").offsetHeight;
var x = 0;
document.getElementById("up").style.visibility="hidden";

function down(){
  x++;
  document.getElementById("box").scrollBy(0, height_box);
  switch(x){
    case 1:
        document.body.classList.replace("bg-active-page1","bg-active-page2");
        document.getElementById("up").style.visibility="visible";
        /*************/
        document.getElementById("card_one").classList.replace("hidden-card1","reveal-card1");
        /*************/
      break;
    case 2:
      document.body.classList.replace("bg-active-page2","bg-active-page3");
      /*************/
      document.getElementById("color-nav").classList.replace("color","color-text-p3");
      /*************/
      break;
    case 3:
      document.body.classList.replace("bg-active-page3","bg-active-page4");
      document.getElementById("card_one").classList.replace("reveal-card1","hidden-card1");
      break;
    case 4:
      document.body.classList.replace("bg-active-page4","bg-active-page5");
      document.getElementById("down").style.visibility="hidden";
      break;
  }
}

function up(){
  x--;
  document.getElementById("box").scrollBy(0, -height_box);
  switch(x){
    case 0:
          document.body.classList.replace("bg-active-page2","bg-active-page1");
          document.getElementById("up").style.visibility="hidden";
          /*************/
          document.getElementById("card_one").classList.replace("reveal-card1","hidden-card1");
          /*************/
      break;
    case 1:
        document.body.classList.replace("bg-active-page3","bg-active-page2");
        /*************/
        document.getElementById("card_one").classList.replace("hidden-card1","reveal-card1");
        /*************/
      break;
    case 2:
      document.body.classList.replace("bg-active-page4","bg-active-page3");
      break;
    case 3:
      document.body.classList.replace("bg-active-page5","bg-active-page4");
      document.getElementById("down").style.visibility="visible";
      break;
  }
}


document.getElementById("down").addEventListener("click",  down);
document.getElementById("up").addEventListener("click",  up);
/*
document.getElementById("d3").addEventListener("click",  down3);
*/

/*
function down1() {
  document.getElementById("page2").scrollIntoView({
    behavior: 'smooth'});
    document.body.classList.replace("bg-active-page1","bg-active-page2");
}
function down2() {
  document.getElementById("page3").scrollIntoView({
    behavior: 'smooth'});
    document.body.classList.replace("bg-active-page2","bg-active-page3");
}
function down3() {
  document.getElementById("page4").scrollIntoView({
    behavior: 'smooth'});
    document.body.classList.replace("bg-active-page3","bg-active-page4");
}
*/
/* UP FONCTION */

/*
document.getElementById("u1").addEventListener("click", up1);
document.getElementById("u2").addEventListener("click",  up2);
document.getElementById("u3").addEventListener("click",  up3);
*/

/*
function up1() {
  document.getElementById("page1").scrollIntoView({
    behavior: 'smooth'});
    document.body.classList.replace("bg-active-page2","bg-active-page1");
}
function up2() {
  document.getElementById("page2").scrollIntoView({
    behavior: 'smooth'});
    document.body.classList.replace("bg-active-page3","bg-active-page2");
}
function up3() {
  document.getElementById("page3").scrollIntoView({
    behavior: 'smooth'});
    document.body.classList.replace("bg-active-page4","bg-active-page3");
}
*/
