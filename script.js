// Simple scroll animation
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const trigger = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Initialize animation styles
window.onload = () => {
  document.querySelectorAll("section").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "all 0.6s ease-out";
  });
};
