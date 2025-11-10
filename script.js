// --- Fade-in on scroll ---
const sections = document.querySelectorAll("section");

const showSections = () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < trigger) {
      sec.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);

// --- Theme toggle ---
const toggleBtn = document.createElement("div");
toggleBtn.className = "theme-toggle";
toggleBtn.innerHTML = "☀️";
document.body.appendChild(toggleBtn);

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleBtn.innerHTML = "🌙";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  toggleBtn.innerHTML = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// --- Particle background ---
const canvas = document.createElement("canvas");
canvas.id = "particles";
document.body.prepend(canvas);
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createParticles() {
  particles = [];
  const count = window.innerWidth < 768 ? 20 : 50;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,195,255,0.6)";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();
