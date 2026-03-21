const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const yearEl = document.getElementById("year");

// Toggle mobile menu
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Set footer year otomatis
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Reveal animation saat discroll
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.14,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}