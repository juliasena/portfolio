// Anima a timeline quando visível
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

timelineItems.forEach((item) => {
  item.style.opacity = 0;
  item.style.transform = "translateY(20px)";
  item.style.transition = "all 0.6s ease";
  timelineObserver.observe(item);
});

// Anima as barras de skill
const skillLevels = document.querySelectorAll(".skill-level");

skillLevels.forEach((level) => {
  const width = level.getAttribute("data-level") + "%";
  setTimeout(() => {
    level.querySelector("::after").style.width = width;
  }, 500);
});

// Contador animado
const statNumbers = document.querySelectorAll(".stat-number");

statNumbers.forEach((number) => {
  const target = parseInt(number.getAttribute("data-count"));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const counter = setInterval(() => {
    current += step;
    if (current >= target) {
      clearInterval(counter);
      number.textContent = target;
    } else {
      number.textContent = Math.floor(current);
    }
  }, 16);
});

// No seu arquivo about-animations.js
function handleMobileLayout() {
  const isMobile = window.innerWidth < 768;
  const heroContent = document.querySelector(".hero-content");
  const storyChapters = document.querySelectorAll(".story-chapter");

  if (isMobile) {
    // Ajustes específicos para mobile
    heroContent.classList.add("mobile-mode");
    storyChapters.forEach((chapter) => {
      chapter.classList.add("mobile-mode");
    });
  } else {
    heroContent.classList.remove("mobile-mode");
    storyChapters.forEach((chapter) => {
      chapter.classList.remove("mobile-mode");
    });
  }
}

// Inicializa e observa mudanças de tamanho
window.addEventListener("load", handleMobileLayout);
window.addEventListener("resize", handleMobileLayout);
