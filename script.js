const links = document.getElementById("links");
const navButton = document.getElementById("button");

const navBar = () =>{
   if(navButton.firstElementChild.innerHTML == "+"){
      navButton.firstElementChild.innerHTML = "-";
      links.style.animation = "dropdown 0.8s ease-in-out forwards";
   } else{
      navButton.firstElementChild.innerHTML = "+";
      links.style.animation = "dropup 0.8s ease-in-out forwards";
   }

   setTimeout(() =>{
      navButton.firstElementChild.innerHTML = "+";
      links.style.animation = "dropup 0.8s ease-in-out forwards";
   }, 5000);
};

navButton.addEventListener("click", navBar);