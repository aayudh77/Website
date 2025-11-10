// AOS init
AOS.init({ once: true, duration: 700, offset: 100, easing: 'ease-in-out' });

// Theme toggle with persistence
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') body.classList.add('light');

toggleBtn.addEventListener('click', () => {
  const isLight = body.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  toggleBtn.textContent = isLight ? '🌞' : '🌙';
});

// Scroll-driven timeline line growth
const timelineSection = document.querySelector('#timeline .timeline') || document.querySelector('.timeline');
const timelineLine = document.querySelector('.timeline .line');

function updateTimelineLine() {
  if (!timelineSection || !timelineLine) return;
  const rect = timelineSection.getBoundingClientRect();
  const windowH = window.innerHeight;
  if (rect.top < windowH && rect.bottom > 0) {
    // how much of the timeline is visible from top
    const visible = Math.min(windowH - Math.max(rect.top, 0), rect.height);
    const height = Math.max(0, visible);
    timelineLine.style.height = `${height}px`;
  }
}

window.addEventListener('scroll', updateTimelineLine);
window.addEventListener('resize', updateTimelineLine);
document.addEventListener('DOMContentLoaded', updateTimelineLine);
