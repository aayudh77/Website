// Initialize AOS animation
AOS.init({
  once: true,
  offset: 100,
  duration: 800,
  easing: 'ease-in-out',
});

// Theme toggle logic with smooth transitions and persistence
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(isLight) {
  if (isLight) {
    body.classList.add('light');
    toggleBtn.textContent = '🌙'; // Change icon to moon
    toggleBtn.setAttribute('aria-pressed', 'true');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    toggleBtn.textContent = '☀️'; // Change icon to sun
    toggleBtn.setAttribute('aria-pressed', 'false');
    localStorage.setItem('theme', 'dark');
  }
}

// Load theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  setTheme(true);
} else {
  setTheme(false);
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  const isLight = body.classList.contains('light');
  setTheme(!isLight);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navRight = document.querySelector('.nav-right');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navRight.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar') && navRight.classList.contains('active')) {
    navRight.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});
