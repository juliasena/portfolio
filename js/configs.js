var typed = new Typed("#animated-text", {
  strings: ["Desenvolvedora Front-end", "Data Science Student"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});

ScrollReveal().reveal(".reveal", {
  duration: 1200,
  origin: "bottom",
  distance: "50px",
  easing: "ease-in-out",
  reset: true,
});

// ScrollReveal().reveal(".reveal-left", {
//   origin: "left",
//   distance: "100px",
//   duration: 1000,
//   reset: true,
// });
// ScrollReveal().reveal(".reveal-right", {
//   origin: "right",
//   distance: "100px",
//   duration: 1000,
//   reset: true,
// });

particlesJS.load("particles-js", "js/particlesjs-config.json", function () {
  console.log("Particles configurado");
});

function scrollParaConteudo() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".menu-item");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${section.id}`) {
          item.classList.add("active");
        }
      });
    }
  });
});

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link

    const targetId = item.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    window.scrollTo({
      top: targetSection.offsetTop - navbarHeight - 10, // Ajuste para evitar corte do título
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// No seu arquivo configs.js ou script existente
function handleMobileMenu() {
  const navbar = document.querySelector(".navbar");
  if (window.innerWidth < 768) {
    navbar.classList.add("mobile-mode");
  } else {
    navbar.classList.remove("mobile-mode");
  }
}

// Inicializa e observa mudanças de tamanho
window.addEventListener("load", handleMobileMenu);
window.addEventListener("resize", handleMobileMenu);
