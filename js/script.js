// Menu mobile
const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");

  const isOpen = menu.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
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
