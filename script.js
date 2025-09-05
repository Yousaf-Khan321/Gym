// ===== Loader Animation =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

// ===== Dark/Light Mode Toggle =====
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// ===== Scroll Animation =====
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "1s ease";
    }
  });
});

// ===== Form Submission =====
const form = document.querySelector(".register form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Thank you for registering! We will contact you soon.");
  form.reset();
});
