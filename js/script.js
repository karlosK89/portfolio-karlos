// Menu mobile
const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Animation simple au scroll
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

elements.forEach((element) => {
  observer.observe(element);
});

// Année automatique dans le footer
document.querySelector("#year").textContent = new Date().getFullYear();
