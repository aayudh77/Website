// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
if(localStorage.getItem("theme") === "light") body.classList.add("light");
toggleBtn.addEventListener("click", ()=>{
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
});

// Hamburger menu toggle for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navRight = document.querySelector('.nav-right');
menuToggle.addEventListener('click', () => {
  navRight.classList.toggle('active');
});
menuToggle.addEventListener('keypress', (e) => {
  if(e.key === 'Enter' || e.key === ' ') navRight.classList.toggle('active');
});
