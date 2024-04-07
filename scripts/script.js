//function that logs which section is in view.

let currentSection = "";
let previousSection = "";
const links = document.querySelectorAll("a");
const sections = document.querySelectorAll("section");

function sectionCheck() {
  links.forEach((link) => {
    console.log("link clicked");
    link.addEventListener("click", function (event) {
      // event.preventDefault();
      links.forEach((otherLink) => {
        otherLink.classList.remove("active")
      })
      link.classList.add("active")
      const href = this.getAttribute("href");
        currentSection = document.querySelector(href);
        sections.forEach((section) => {
          section.style.display = "none";
        });
        currentSection.style.display = "flex";
      console.log(`Current section is ${href}`);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  sections.forEach((section) => {
    section.style.display = "none";
  });
  const home = document.querySelector("#home");
  home.style.display = "flex";
  sectionCheck();
});

//if the current section is messaging, then the header and nav should disappear
