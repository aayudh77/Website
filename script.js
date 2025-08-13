// Initialize AOS
AOS.init({ once:true, offset:100, duration:800, easing:'ease-in-out' });

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
if(localStorage.getItem("theme") === "light") body.classList.add("light");

toggleBtn.addEventListener("click", ()=>{
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
});

// Scroll-based timeline line growth
const timelineLine = document.querySelector('.timeline .line');
const timelineSection = document.querySelector('#timeline');

window.addEventListener('scroll', () => {
  const sectionTop = timelineSection.offsetTop;
  const sectionHeight = timelineSection.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight;

  if(scrollY > sectionTop) {
    const visibleHeight = Math.min(scrollY - sectionTop, sectionHeight);
    timelineLine.style.height = `${visibleHeight}px`;
  }
});
