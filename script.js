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

const goToTopAnimation = () =>{
   goToTop.style.animation = "dropdown 0.8s ease-in-out forwards";
   setTimeout(() => {
      goToTop.style.animation = "dropup 0.8s ease-in-out forwards";
   }, 5000);
};

const closeNav = () =>{
   navButton.name = "menu-outline";
   links.style.animation = "dropup 0.8s ease-in-out forwards";
}

document.body.addEventListener("scroll", goToTopAnimation);

navButton.addEventListener("click", navBar);