const links = document.getElementById("links");
const navButton = document.getElementById("button");
const holder_link = document.getElementById("links");
const goToTop = document.getElementById("return");
let holder_children = holder_link.children;

const navBar = () => {
  if (navButton.name == "menu-outline") {
    navButton.name = "close-outline";
    links.style.animation = "dropdown 0.8s ease-in-out forwards";
  } else {
    navButton.name = "menu-outline";
    links.style.animation = "dropup 0.8s ease-in-out forwards";
  }
};

const closeNav = () => {
  navButton.name = "menu-outline";
  links.style.animation = "dropup 0.8s ease-in-out forwards";
};

const textElement = document.querySelector("#typedText");

const messages = [
    "Software Developer",
    "React Developer",
    "Web Developer",
    "Front-End Developer"
];

let messageIndex = 0;

function typeMessage() {
  const currentMessage = messages[messageIndex];
  let charIndex = 0;

  function typeChar() {
    if (charIndex < currentMessage.length) {
      textElement.textContent += currentMessage.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 100); // Adjust typing speed here (in milliseconds)
    } else {
      setTimeout(eraseMessage, 1000); // Delay before erasing
    }
  }

  typeChar();
}

function eraseMessage() {
  const currentMessage = messages[messageIndex];
  let charIndex = currentMessage.length;

  function eraseChar() {
    if (charIndex > 0) {
      textElement.textContent = currentMessage.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseChar, 50); // Adjust erasing speed here (in milliseconds)
    } else {
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeMessage, 500); // Delay before typing the next message
    }
  }

  eraseChar();
}

typeMessage();




navButton.addEventListener("click", navBar);
