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
