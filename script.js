const links = document.getElementById("links");
const navButton = document.getElementById("button");
const holder_link = document.getElementById("links");
const goToTop = document.getElementById("return");
let holder_children = holder_link.children;

const navBar = () =>{
   if(navButton.name == "menu-outline"){
      navButton.name = "close-outline";
      links.style.animation = "dropdown 0.8s ease-in-out forwards";
   } else{
      navButton.name = "menu-outline";
      links.style.animation = "dropup 0.8s ease-in-out forwards";
   }

};

const closeNav = () =>{
   navButton.name = "menu-outline";
   links.style.animation = "dropup 0.8s ease-in-out forwards";
}


navButton.addEventListener("click", navBar);